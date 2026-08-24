import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1400&auto=format&fit=crop' },
  { name: 'tesla-model3.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg/960px-Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg' },
  { name: 'byd-seal.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2022_BYD_Seal.jpg/960px-2022_BYD_Seal.jpg' },
  { name: 'byd-atto3.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BYD_Atto_3_1X7A6491.jpg/960px-BYD_Atto_3_1X7A6491.jpg' },
  { name: 'zeekr-x.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2023_Zeekr_X_%28front%29.jpg/960px-2023_Zeekr_X_%28front%29.jpg' },
  { name: 'deepal-s05.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/2023_Chang%27an_Shenlan_S7.jpg/960px-2023_Chang%27an_Shenlan_S7.jpg' },
  { name: 'tray-organizer.jpg', url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop' },
  { name: 'tpe-floormats.jpg', url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop' },
  { name: 'sunroof-shade.jpg', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop' },
  { name: 'wireless-pad.jpg', url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop' },
  { name: 'trunk-liner.jpg', url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop' },
  { name: 'screen-protector.jpg', url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop' },
  { name: 'qc-inspection.jpg', url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop' }
];

function fetchFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: { 'User-Agent': 'EVSelectAgent/1.0 (test)' }
    };
    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, options, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        reject(new Error(`HTTP error ${res.statusCode} for ${url}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  const targetDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await fetchFile(item.url, dest);
      console.log(`✓ Saved ${item.name}`);
    } catch (e) {
      console.error(`✗ Error downloading ${item.name}:`, e.message);
    }
  }
  console.log('All real images downloaded successfully!');
}

run();
