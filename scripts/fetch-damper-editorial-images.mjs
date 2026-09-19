// Editorial reference photos: retain provenance; never infer a product's fitment from a photo.
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const assets = [
  ['tein-flex-z', 'https://www.tein.com/products/img/flz/flz_products.jpg'],
  ['bilstein-b16', 'https://performance.bilstein.com/wp-content/uploads/2021/12/BILSTEIN-B16.png'],
  ['bc-zr', 'https://bcracing-na.com/wp-content/uploads/2024/12/bc-racing-zr-series-coilovers-1024x576.jpg'],
  ['ohlins-road-track-w177', 'https://www.ohlins.com/storage/D16F9A5A91A144C9E42D5D056CF5C7171EECCC57757ADE81E6E36D8BFBA9715D/40d0a56f71df40afb9612769648a6aff/jpg/media/477a153c871949ecbfdc1d66ac899764/MES%20MV10W177_2_set.jpg'],
  ['hks-hipermax-s', 'https://www.hks-power.co.jp/en/product/suspension/hipermax/maxs/images/sus_01_pc.png'],
  ['hks-hipermax-r', 'https://www.hks-power.co.jp/en/product/suspension/hipermax/r/images/sus_01_pc.png'],
  ['bangkok-ratchadamri', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Bangkok_traffic_3.jpg'],
  ['bmw-m4-gt3-spa', 'https://upload.wikimedia.org/wikipedia/commons/c/cf/BMWWRT462023SPA24.jpg'],
];
const destination = 'public/images/articles/damper-guide';
await mkdir(destination, { recursive: true });
for (const [name, url] of assets) {
  if (process.argv[2] && name !== process.argv[2]) continue;
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const result = await sharp(bytes).rotate().resize({ width: 1280, height: 1000, fit: 'inside', withoutEnlargement: true }).webp({ quality: 83 }).toBuffer({ resolveWithObject: true });
  await writeFile(`${destination}/${name}.webp`, result.data);
  console.log(JSON.stringify({ name, source: url, ...result.info }));
}
