import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { once } from 'node:events';

let base=process.env.BASE_URL;
let server;
if(process.argv.includes('--build')) {
  const listener=createServer().listen(0,'127.0.0.1');
  await once(listener,'listening');
  const port=listener.address().port;
  await new Promise(resolve=>listener.close(resolve));
  base=`http://127.0.0.1:${port}`;
  server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',String(port)],{stdio:'ignore',windowsHide:true});
  let spawnError;
  server.on('error',error=>{spawnError=error;});
  process.on('exit',()=>server?.kill());
  let ready=false;
  for(let i=0;i<120;i++) {
    if(spawnError) throw spawnError;
    if(server.exitCode!==null) throw new Error('Built test server exited');
    try {if((await fetch(base+'/robots.txt')).status===200){ready=true;break;}} catch {}
    await new Promise(resolve=>setTimeout(resolve,250));
  }
  assert.ok(ready,'Built test server must become ready');
}
try {
assert.ok(base,'Set BASE_URL to the built or live site');
const records=JSON.parse(await readFile('src/data/image-credits.json','utf8'));
const routes=[...new Set(records.flatMap(image=>image.pages)), '/articles?category=reviews', '/articles?category=suspension', '/articles?category=guides', '/articles?segment=sedan'];
const rawAsset=src=>{
  const url=new URL(src,base);
  return url.pathname==='/_next/image'?url.searchParams.get('url'):url.pathname;
};
const matches=(asset,actual)=>asset===actual || (actual.startsWith('/_next/static/media/') && actual.split('/').at(-1).startsWith(asset.split('/').at(-1).replace(/\.[^.]+$/,'.')));
let objects=0;
for(const route of routes) {
  const response=await fetch(base+route,{signal:AbortSignal.timeout(20000)});
  assert.equal(response.status,200,route);
  const {document}=parseHTML(await response.text());
  assert.equal(document.querySelectorAll('figcaption, .article-credit').length,0,route+' has no under-image caption');
  assert.ok(document.querySelector('footer a[href="/image-credits"]'),route+' links to accessible credits');
  const actual=new Set([...document.querySelectorAll('img, picture source')].flatMap(node=>{
    const src=node.getAttribute('src');
    const srcset=node.getAttribute('srcset')||node.getAttribute('srcSet');
    return [...(src?[rawAsset(src)]:[]),...(srcset?srcset.split(',').map(src=>rawAsset(src.trim().split(' ')[0])):[])];
  }));
  const metadata=[...document.querySelectorAll('script[data-image-metadata]')].flatMap(node=>JSON.parse(node.textContent)['@graph']);
  for(const image of metadata) {
    const content=new URL(image.contentUrl);
    assert.equal(content.origin,'https://evselects.com',route+' uses production image URLs');
    assert.ok(actual.has(content.pathname),route+' metadata image actually appears: '+content.pathname);
    const response=await fetch(base+content.pathname,{signal:AbortSignal.timeout(20000)});
    assert.equal(response.status,200,'Image content URL '+content.pathname);
    assert.match(response.headers.get('content-type'),/^image\//);
  }
  for(const image of records.filter(image=>image.pages.includes(route.split('?')[0]))) {
    if([...actual].some(asset=>matches(image.asset,asset))) assert.ok(metadata.some(meta=>meta['@id']==='https://evselects.com'+image.asset+'#image'),route+' preserves attribution: '+image.asset);
  }
  objects+=metadata.length;
}
const creditResponse=await fetch(base+'/image-credits');
assert.equal(creditResponse.status,200);
const {document}=parseHTML(await creditResponse.text());
assert.equal(document.querySelectorAll('h1').length,1);
for(const image of records) {
  const credit=document.getElementById(image.id);
  assert.ok(credit,'Credit anchor '+image.id);
  assert.ok(credit.textContent.includes(image.creditText));
  for(const href of [image.source,image.reference,image.license].filter(Boolean)) {
    const link=[...credit.querySelectorAll('a')].find(a=>a.getAttribute('href')===href);
    assert.equal(link?.getAttribute('target'),'_blank');
    assert.equal(link?.getAttribute('rel'),'noopener noreferrer');
  }
}
console.log(`Verified ${routes.length} page/filter variants, ${objects} rendered ImageObjects and ${records.length} accessible credit records.`);
} finally {
  server?.kill();
}
