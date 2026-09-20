// Targeted corrections from the rendered audit, not a global text replacement.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const root = 'src/app/(storefront)/articles';
const text = n => ts.isJsxText(n) ? n.text : [...n.getChildren()].map(text).join(' ');
const ctas = {
  'ค้นหาตามรุ่นรถ': ['/articles?category=reviews', 'ดูรีวิวรถ EV แต่ละรุ่น'],
  'ดูโช้คอัพ Monotube ตรงรุ่น': ['/articles/ev-damper-tuning-bump-rebound-guide#types', 'เข้าใจโครงสร้างและวิธีปรับโช้ค'],
  'ดูชุดอัปเกรดช่วงล่าง SUV': ['/articles/ev-damper-tuning-bump-rebound-guide#buying-brief', 'เตรียมข้อมูลก่อนเลือกช่วงล่าง SUV'],
  'อ่านรีวิวช่วงล่าง Zeekr 7X': ['/articles/zeekr-7x-2026-review', 'อ่านรีวิว ZEEKR 7X'],
  'ดูปีกนกปรับแคมเบอร์ตรงรุ่น': ['/articles/ev-damper-tuning-bump-rebound-guide#ev-fitment', 'ตรวจความเข้ากันได้ก่อนเปลี่ยนช่วงล่าง'],
  'ดูชุดอาร์มหลังปรับมุมล้อ': ['/articles/ev-damper-tuning-bump-rebound-guide#baseline', 'สิ่งที่ควรตรวจก่อนปรับช่วงล่างและตั้งศูนย์'],
};
const h4Files = new Set(['byd-atto-3-review', 'byd-seal-review', 'mg4-electric-review', 'ev-battery-care', 'ev-camber-adjustment-wheel-alignment-guide', 'ev-horsepower-vs-torque-explained', 'ev-tyre-and-coilover-selection-guide', 'hybrid-to-ev-chassis-dynamics-transition', 'optimizing-ev-suspension-thai-roads', 'shock-absorber-types-monotube-twintube-air-ev', 'zeekr-009-review']);
const changes = [];
for (const entry of fs.readdirSync(root, { withFileTypes: true }).filter(e => e.isDirectory())) {
  const file = path.join(root, entry.name, 'page.tsx');
  let source = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  function visit(node) {
    if (ts.isJsxText(node) && node.text.includes('กลับสู่หน้ารวมบทความ EVSELECT')) edits.push({ start: node.pos, end: node.end, text: node.text.replace('กลับสู่หน้ารวมบทความ EVSELECT', 'กลับสู่หน้ารวมบทความ EV') });
    if (ts.isJsxElement(node)) {
      const opening = node.openingElement;
      const tag = opening.tagName.getText();
      const label = node.children.map(text).join(' ').replace(/\s+/g, ' ').trim();
      let level;
      if (tag === 'h3' && (/สรุปภาพรวมสำหรับผู้ซื้อ|Executive Summary|Dyno Fact Sheet|Transition Summary|Architecture Summary/.test(label) || label.startsWith('ทำไมรถ EV ถึงมีปัญหาช่วงล่าง'))) level = 'h2';
      if (tag === 'h4' && h4Files.has(entry.name)) {
        const keep = /^(รีวิว|5 วิธี|การเซ็ตอัปช่วงล่าง|ล้อฟอร์จ|เซ็นเซอร์วัดลม|แผ่นกันกระแทก|ชุดโช้คอัพสเปก|พรมปูพื้น|ม่านบังแดดหลังคาแก้ว|สรุปคำแนะนำ:)/.test(label);
        if (!keep) level = 'h3';
      }
      if (level) {
        for (const part of [opening.tagName, node.closingElement.tagName]) edits.push({ start: part.getStart(ast), end: part.end, text: level });
      }
      if (tag === 'Link') for (const [from, [href, to]] of Object.entries(ctas)) if (label.includes(from)) {
        const prop = opening.attributes.properties.find(p => p.name?.getText() === 'href');
        if (!prop?.initializer || !ts.isStringLiteral(prop.initializer)) throw new Error(`Unexpected CTA href ${file}`);
        edits.push({ start: prop.initializer.getStart(ast), end: prop.initializer.end, text: JSON.stringify(href) });
        function replaceLabel(n) {
          if (ts.isJsxText(n) && n.text.includes(from)) edits.push({ start: n.pos, end: n.end, text: n.text.replace(from, to) });
          else ts.forEachChild(n, replaceLabel);
        }
        replaceLabel(node);
      }
      if (tag === 'a') {
        const href = opening.attributes.properties.find(p => p.name?.getText() === 'href')?.initializer;
        if (href && ts.isJsxExpression(href) && /^article\.sources\./.test(href.expression?.getText() || '')) {
          const has = key => opening.attributes.properties.some(p => p.name?.getText() === key);
          const add = [!has('target') ? 'target="_blank"' : '', !has('rel') ? 'rel="noopener noreferrer"' : ''].filter(Boolean);
          if (add.length) edits.push({ start: opening.attributes.end, end: opening.attributes.end, text: ' ' + add.join(' ') });
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const edit of edits.sort((a, b) => b.start - a.start)) source = source.slice(0, edit.start) + edit.text + source.slice(edit.end);
  if (edits.length) { fs.writeFileSync(file, source); changes.push({ file, edits: edits.length }); }
}
console.log(JSON.stringify(changes, null, 2));
