"""Offline regression checks for the heading audit, not page reader review."""
import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch
from urllib.error import HTTPError

spec = importlib.util.spec_from_file_location('heading_audit', Path(__file__).with_name('audit-heading-baseline.py'))
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)


class HeadingAuditTests(unittest.TestCase):
    def inspect_html(self, html):
        with patch.object(audit, 'fetch', return_value=(200, html, 'https://example.com/')):
            return audit.inspect('https://example.com/')

    def test_grouped_cards_and_returning_to_h2_are_valid(self):
        result = self.inspect_html('<main><h1>Articles</h1><h2>All</h2><h3>Cars</h3><h4>Car A</h4><h4>Car B</h4><h2>Help</h2></main>')
        self.assertEqual(result['h1Count'], 1)
        self.assertEqual(result['contentLevelSkips'], [])

    def test_skipped_nested_heading_is_reported(self):
        result = self.inspect_html('<main><h1>Guide</h1><h2>Comparison</h2><h4>Option</h4></main>')
        self.assertEqual(result['contentLevelSkips'], [{'from': 2, 'to': 4, 'text': 'Option'}])

    def test_duplicate_h1_outside_main_is_counted(self):
        result = self.inspect_html('<header><h1>Brand</h1></header><main><h1>Guide</h1></main>')
        self.assertEqual(result['h1Count'], 2)

    def test_empty_and_linked_headings(self):
        result = self.inspect_html('<main><h1><a href="/">Guide <em>EV</em></a></h1><h2> \n </h2></main>')
        self.assertEqual([h['text'] for h in result['headings']], ['Guide EV', ''])

    def test_filter_discovery_does_not_crawl_unrelated_or_external_urls(self):
        html = '''<a href="/articles?category=reviews&amp;segment=sedan#grid">Sedans</a>
        <a href="https://example.com/articles?category=guides">Guides</a>
        <a href="https://other.example/articles?category=reviews">External</a>
        <a href="/articles?category=reviews&amp;delete=all">Unexpected</a>
        <a href="/admin?category=reviews">Admin</a>
        <a href="/articles?category=">Empty results</a>'''
        self.assertEqual(audit.catalogue_filters('https://example.com', html), {
            'https://example.com/articles?category=reviews&segment=sedan',
            'https://example.com/articles?category=guides',
            'https://example.com/articles?category=',
        })

    def test_forbidden_response_is_not_a_heading_failure(self):
        with patch.object(audit, 'fetch', side_effect=HTTPError('https://example.com/', 403, 'Forbidden', {}, None)):
            result = audit.inspect('https://example.com/')
        self.assertEqual(result['status'], 403)
        self.assertNotIn('h1Count', result)


if __name__ == '__main__':
    unittest.main()
