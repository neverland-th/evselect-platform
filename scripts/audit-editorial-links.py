"""Inventory public-page links from HTTP markup; not a rendered reader review."""
import argparse
import concurrent.futures
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
VOID = {'img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'wbr', 'area', 'base', 'embed', 'param', 'track', 'col'}


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack, self.links, self.brand, self.ids = [], [], [], set()
        self.active = None
        self.nested = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'a':
            if self.active is not None:
                self.nested += 1
            self.active = {'href': attrs.get('href', ''), 'text': '', 'scope': self.stack.copy()}
        if tag not in VOID:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag == 'a' and self.active is not None:
            self.active['text'] = ' '.join(self.active['text'].split())
            self.links.append(self.active)
            self.active = None
        if tag in self.stack:
            self.stack = self.stack[:len(self.stack) - 1 - self.stack[::-1].index(tag)]

    def handle_data(self, data):
        if any(t in self.stack for t in ('head', 'script', 'style')):
            return
        if self.active is not None:
            self.active['text'] += data
        if re.search(r'\bEVSELECTS?\b', data, re.I):
            href = self.active['href'] if self.active else None
            if href not in ('/', 'https://evselects.com/', 'https://www.evselects.com/'):
                self.brand.append({'text': data.strip(), 'href': href, 'scope': self.stack.copy()})


def main():
    args = argparse.ArgumentParser()
    args.add_argument('--base', default='http://127.0.0.1:3117')
    args.add_argument('--output', default='docs/editorial/link-inventory-2026-09-21.json')
    opts = args.parse_args()
    routes = re.findall(r"'(/[^']*)'", (ROOT / 'src/lib/public-site-routes.ts').read_text(encoding='utf-8'))
    def inspect(route):
        parser = Links()
        try:
            with urlopen(opts.base + route, timeout=30) as response:
                parser.feed(response.read().decode('utf-8'))
            return route, parser
        except Exception as exc:
            return route, str(exc)
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        pages = dict(pool.map(inspect, routes))
    report = []
    for route, page in pages.items():
        if isinstance(page, str):
            report.append({'route': route, 'error': page})
            continue
        internal, external, broken = [], [], []
        for link in page.links:
            target = urlsplit(urljoin(opts.base + route, link['href']))
            if target.netloc in (urlsplit(opts.base).netloc, 'evselects.com', 'www.evselects.com'):
                destination = target.path.rstrip('/') or '/'
                # Catalogue filters are valid; their semantic usefulness needs browser review.
                public_asset = ROOT / 'public' / destination.lstrip('/')
                if destination not in pages and not public_asset.is_file():
                    broken.append({**link, 'reason': 'outside public route inventory'})
                elif target.fragment and destination in pages and isinstance(pages[destination], Links) and unquote(target.fragment) not in pages[destination].ids:
                    broken.append({**link, 'reason': 'missing target id'})
                if 'main' in link['scope'] and 'nav' not in link['scope'] and 'footer' not in link['scope']:
                    internal.append(link)
            elif target.scheme in ('https', 'http') and 'main' in link['scope']:
                external.append(link)
        report.append({'route': route, 'mainInternalLinks': internal, 'mainExternalLinks': external, 'unlinkedOrMisdirectedBrandText': page.brand, 'brokenInternalTargets': broken, 'nestedAnchorCount': page.nested})
    destination = ROOT / opts.output
    destination.write_text(json.dumps({'scope': 'HTTP markup inventory. Includes related cards in mainInternalLinks; does not establish contextual usefulness or rendered QA. No external URLs requested.', 'results': report}, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'routes': len(report), 'errors': [p for p in report if 'error' in p], 'pagesWithoutMainInternalLinks': [p['route'] for p in report if not p.get('mainInternalLinks')], 'brandIssues': {p['route']: len(p['unlinkedOrMisdirectedBrandText']) for p in report if p.get('unlinkedOrMisdirectedBrandText')}, 'brokenTargets': {p['route']: p['brokenInternalTargets'] for p in report if p.get('brokenInternalTargets')}}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
