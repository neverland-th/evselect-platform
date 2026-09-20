// One-time source-aware migration. It only edits JSX link attributes and visible
// JSX brand text in the explicitly scoped public files, never metadata or JSON-LD.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const walkFiles = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walkFiles(path.join(dir, e.name)) : e.name.endsWith('.tsx') ? [path.join(dir, e.name)] : []);
const files = [
  ...walkFiles('src/app/(storefront)').filter(f => !f.includes(`${path.sep}product${path.sep}`)),
  ...['MobileMenu.tsx', 'ComingSoonBanner.tsx', 'PrelaunchPanel.tsx', 'ImageCredit.tsx', 'articles/DamperPhoto.tsx', 'articles/BrakeKitReferences.tsx', 'articles/BrakeBrandCompare.tsx', 'articles/BrakeEnergyLab.tsx', 'articles/DamperExplorer.tsx'].map(f => path.join('src/components', f)),
];
const anchor = n => ts.isJsxElement(n) && ['a', 'Link'].includes(n.openingElement.tagName.getText());
const changes = [];
for (const file of files) {
  let source = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  let needsLink = false;
  function visit(node) {
    if (ts.isJsxText(node) && /\bEVSELECTS?\b/.test(node.text)) {
      let parent = node.parent;
      let enclosingAnchor;
      while (parent) { if (anchor(parent)) { enclosingAnchor = parent; break; } parent = parent.parent; }
      let replacement = node.text;
      if (enclosingAnchor) {
        const href = enclosingAnchor.openingElement.attributes.properties.find(p => p.name?.getText() === 'href')?.initializer;
        if (!href || !ts.isStringLiteral(href) || !['/', 'https://evselects.com/', 'https://evselects.com'].includes(href.text)) {
          for (const [from, to] of [['EVSELECT Reviews', 'รีวิวรถ EV'], ['ติดต่อ EVSELECT', 'ติดต่อทีมงาน'], ['สอบถามทีม EVSELECT', 'สอบถามทีมงาน'], ['ส่งคำถามให้ทีม EVSELECT', 'ส่งคำถามให้ทีมงาน']]) replacement = replacement.replaceAll(from, to);
          if (/\bEVSELECTS?\b/.test(replacement)) console.log(`MANUAL nested-link context: ${file}: ${replacement.trim()}`);
        }
      } else {
        replacement = replacement.replace(/\bEVSELECTS?\b/g, name => `<Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">${name}</Link>`);
        needsLink = true;
      }
      if (replacement !== node.text) edits.push({ start: node.pos, end: node.end, text: replacement });
    }
    if ((ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) && ['a', 'Link'].includes(node.tagName.getText())) {
      const props = node.attributes.properties;
      const attr = name => props.find(p => ts.isJsxAttribute(p) && p.name.getText() === name);
      const href = attr('href')?.initializer;
      let external = false;
      let internal = false;
      if (href && ts.isStringLiteral(href)) {
        const url = new URL(href.text, 'https://evselects.com');
        if (['http:', 'https:'].includes(url.protocol)) {
          internal = ['evselects.com', 'www.evselects.com'].includes(url.hostname);
          external = !internal;
        }
      } else if (href && ts.isJsxExpression(href)) {
        external = /^(sources\[to\]\.url|source\.url|product\.(source|technicalSource|wheelSource)|photo\.href|item\.source)$/.test(href.expression?.getText() || '');
      }
      if (external) {
        const add = [];
        for (const [key, value] of [['target', '_blank'], ['rel', 'noopener noreferrer']]) {
          const existing = attr(key);
          if (existing) {
            if (!existing.initializer || !ts.isStringLiteral(existing.initializer)) throw new Error(`Manual dynamic ${key}: ${file}`);
            const next = key === 'rel' ? [...new Set([...existing.initializer.text.split(/\s+/), 'noopener', 'noreferrer'])].filter(Boolean).join(' ') : value;
            if (next !== existing.initializer.text) edits.push({ start: existing.initializer.getStart(ast), end: existing.initializer.end, text: JSON.stringify(next) });
          } else add.push(`${key}="${value}"`);
        }
        if (add.length) edits.push({ start: node.attributes.end, end: node.attributes.end, text: ' ' + add.join(' ') });
      } else if (internal && attr('target')) {
        const existing = attr('target');
        edits.push({ start: existing.getStart(ast), end: existing.end, text: 'target="_self"' });
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const edit of edits.sort((a, b) => b.start - a.start)) source = source.slice(0, edit.start) + edit.text + source.slice(edit.end);
  if (needsLink && !/import Link from ['"]next\/link['"]/.test(source)) {
    const firstImport = ast.statements.find(ts.isImportDeclaration);
    if (!firstImport) throw new Error(`Manual import needed: ${file}`);
    // Import positions precede the JSX changes, so remain stable.
    source = source.slice(0, firstImport.getStart(ast)) + "import Link from 'next/link';\n" + source.slice(firstImport.getStart(ast));
  }
  if (edits.length) { fs.writeFileSync(file, source); changes.push({ file, edits: edits.length }); }
}
console.log(JSON.stringify(changes, null, 2));
