import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { parseHTML } from 'linkedom';
const report = JSON.parse(await fs.readFile(process.env.AUDIT_INPUT || 'scratch/content-link-audit.json', 'utf8'));
const output = process.env.SOURCE_OUTPUT || 'scratch/link-source-evidence';
const base = (process.env.BASE_URL || 'http://127.0.0.1:4327').replace(/\/$/, '');
await fs.mkdir(output, { recursive: true });
const items = new Map();
for (const page of report.pages) {
  const r = await fetch(base + page.route);
  if (r.status !== 200) throw new Error(`Cannot inventory ${page.route}: HTTP ${r.status}`);
  const { document } = parseHTML(await r.text());
  for (const a of document.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    if (!/^https?:\/\//.test(href) || ['evselects.com', 'www.evselects.com'].includes(new URL(href).hostname)) continue;
    if (!items.has(href)) items.set(href, { url: href, contexts: [] });
    const block = a.closest('p,li,td,th,figcaption,figure') || a;
    const context = block.textContent.replace(/\s+/g, ' ').trim();
    const anchor = (a.textContent || a.getAttribute('aria-label') || a.querySelector('img')?.getAttribute('alt') || '').trim();
    if (!items.get(href).contexts.some(x => x.page === page.route && x.text === context)) items.get(href).contexts.push({ page: page.route, anchor, text: context });
  }
}
const entries = [...items.values()];
let cursor = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (cursor < entries.length) {
    const item = entries[cursor++];
    item.id = createHash('sha256').update(item.url).digest('hex').slice(0, 12);
    try {
      const r = await fetch(item.url, { signal: AbortSignal.timeout(20000), headers: { 'User-Agent': 'Mozilla/5.0 EVSELECT-link-check' } });
      item.status = r.status; item.finalUrl = r.url; item.type = r.headers.get('content-type');
      if (item.type?.includes('html')) {
        const { document } = parseHTML(await r.text());
        item.title = document.querySelector('title')?.textContent;
        for (const n of document.querySelectorAll('script,style,noscript,template')) n.remove();
        const text = (document.querySelector('main,article') || document.body).textContent.replace(/[\t ]+/g, ' ').replace(/\n\s*\n/g, '\n').trim();
        await fs.writeFile(`${output}/${item.id}.txt`, text);
        item.extractedTextFile = `${output}/${item.id}.txt`;
      } else await r.body?.cancel();
    } catch (e) { item.error = e.message; }
    item.checkedAt = new Date().toISOString();
    item.claimReview = 'pending: HTTP and extracted text are evidence only, not a support verdict';
  }
}));
await fs.writeFile(`${output}/inventory.json`, JSON.stringify(entries, null, 2));
console.log(JSON.stringify({ unique: entries.length, statuses: entries.reduce((o, e) => ({ ...o, [e.status || 'network-error']: (o[e.status || 'network-error'] || 0) + 1 }), {}), failures: entries.filter(e => e.status !== 200).map(e => ({ url: e.url, status: e.status, error: e.error })), output }, null, 2));
