"""Read-only HTTP heading inventory. Not a rendered or editorial QA pass."""
import concurrent.futures
import argparse
import json
from html.parser import HTMLParser
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET

BASE = 'https://www.evselects.com'
ROOT = Path(__file__).resolve().parents[1]


class Headings(HTMLParser):
    def __init__(self):
        super().__init__()
        self.headings = []
        self.active = None
        self.scope = []

    def handle_starttag(self, tag, attrs):
        if tag in ('nav', 'header', 'main', 'article', 'footer', 'aside'):
            self.scope.append(tag)
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.active = {'level': int(tag[1]), 'text': '', 'scope': list(self.scope)}

    def handle_data(self, data):
        if self.active is not None:
            self.active['text'] += data

    def handle_endtag(self, tag):
        if self.active and tag == 'h' + str(self.active['level']):
            self.active['text'] = ' '.join(self.active['text'].split())
            self.headings.append(self.active)
            self.active = None
        if tag in self.scope:
            index = len(self.scope) - 1 - self.scope[::-1].index(tag)
            self.scope = self.scope[:index]


def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'EVSELECT editorial audit'}), timeout=25) as response:
        return response.status, response.read().decode('utf-8'), response.url


def inspect(url):
    try:
        status, html, final_url = fetch(url)
        parser = Headings()
        parser.feed(html)
        content = [h for h in parser.headings if 'main' in h['scope'] or 'article' in h['scope']]
        skips = []
        previous = 0
        for heading in content:
            if heading['level'] > previous + 1:
                skips.append({'from': previous, 'to': heading['level'], 'text': heading['text']})
            previous = heading['level']
        return {'url': url, 'finalUrl': final_url, 'status': status,
                'h1Count': sum(h['level'] == 1 for h in parser.headings),
                'contentLevelSkips': skips, 'headings': parser.headings}
    except Exception as error:
        return {'url': url, 'error': str(error)}


def main():
    options = argparse.ArgumentParser()
    options.add_argument('--base', default=BASE)
    options.add_argument('--output', default='docs/editorial/heading-baseline-2026-09-21.json')
    options.add_argument('--check', action='store_true', help='Exit nonzero for unavailable routes, missing/duplicate H1, empty headings or skipped content levels.')
    args = options.parse_args()
    base = args.base.rstrip('/')
    _, xml, _ = fetch(base + '/sitemap.xml')
    root = ET.fromstring(xml)
    from urllib.parse import urlsplit
    urls = {base + urlsplit(node.text).path for node in root.iter() if node.tag.endswith('}loc') and node.text}
    for page in (ROOT / 'src/app/(storefront)').rglob('page.tsx'):
        parts = page.relative_to(ROOT / 'src/app/(storefront)').parts[:-1]
        if any('[' in part for part in parts):
            continue  # Concrete dynamic URLs are sourced from the sitemap.
        path = '/'.join(part for part in parts if not part.startswith('('))
        urls.add(base + '/' + path)
    for page in (ROOT / 'public').rglob('*.html'):
        urls.add(base + '/' + page.relative_to(ROOT / 'public').as_posix())
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        results = list(pool.map(inspect, sorted(urls)))
    destination = ROOT / args.output
    destination.write_text(json.dumps({'scope': 'Live HTTP markup from sitemap plus static storefront routes; protected/404 routes reported, not changed; rendered visibility and reader review pending.', 'results': results}, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'report': str(destination), 'routes': len(results),
                      'non200': [r['url'] for r in results if r.get('status') != 200],
                      'h1Issues': [{'url': r['url'], 'count': r.get('h1Count')} for r in results if r.get('status') == 200 and r.get('h1Count') != 1],
                      'contentSkipPages': [{'url': r['url'], 'skips': len(r['contentLevelSkips'])} for r in results if r.get('contentLevelSkips')]}, ensure_ascii=False, indent=2))
    if args.check and any(r.get('status') != 200 or r.get('h1Count') != 1 or r.get('contentLevelSkips') or any(not h['text'] for h in r.get('headings', [])) for r in results):
        raise SystemExit(1)


if __name__ == '__main__':
    main()
