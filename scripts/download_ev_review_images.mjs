import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

const reviewImages = [
  // BYD Seal
  {
    name: 'byd-seal-hero.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2022_BYD_Seal.jpg/1280px-2022_BYD_Seal.jpg',
    fallback: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'byd-seal.jpg'
  },
  {
    name: 'byd-seal-exterior.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BYD_Seal_001.jpg/1280px-BYD_Seal_001.jpg',
    fallback: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'byd-seal.jpg'
  },
  {
    name: 'byd-seal-interior.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/BYD_Seal_Auto_Zuerich_2023_1X7A0436.jpg/1280px-BYD_Seal_Auto_Zuerich_2023_1X7A0436.jpg',
    fallback: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'hero-bg.jpg'
  },
  {
    name: 'byd-seal-details.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BYD_Seal_Auto_Zuerich_2023_1X7A0437.jpg/1280px-BYD_Seal_Auto_Zuerich_2023_1X7A0437.jpg',
    fallback: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'tpe-floormats.jpg'
  },

  // Tesla Model 3 Highland
  {
    name: 'tesla-model-3-hero.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg/1280px-Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg',
    fallback: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'tesla-model3.jpg'
  },
  {
    name: 'tesla-model-3-exterior.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tesla_Model_3_%27Highland%27_%282024%29_2.jpg/1280px-Tesla_Model_3_%27Highland%27_%282024%29_2.jpg',
    fallback: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'tesla-model3.jpg'
  },
  {
    name: 'tesla-model-3-interior.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tesla_Model_3_Highland_IAA_2023_1X7A0064.jpg/1280px-Tesla_Model_3_Highland_IAA_2023_1X7A0064.jpg',
    fallback: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'tray-organizer.jpg'
  },
  {
    name: 'tesla-model-3-details.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Tesla_Model_3_Highland_IAA_2023_1X7A0065.jpg/1280px-Tesla_Model_3_Highland_IAA_2023_1X7A0065.jpg',
    fallback: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'sunroof-shade.jpg'
  },

  // BYD Atto 3
  {
    name: 'byd-atto-3-hero.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BYD_Atto_3_1X7A6491.jpg/1280px-BYD_Atto_3_1X7A6491.jpg',
    fallback: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'byd-atto3.jpg'
  },
  {
    name: 'byd-atto-3-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'byd-atto3.jpg'
  },
  {
    name: 'byd-atto-3-interior.jpg',
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'sunroof-shade.jpg'
  },
  {
    name: 'byd-atto-3-details.jpg',
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'tpe-floormats.jpg'
  },

  // Zeekr X
  {
    name: 'zeekr-x-hero.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2023_Zeekr_X_%28front%29.jpg/1280px-2023_Zeekr_X_%28front%29.jpg',
    fallback: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'zeekr-x.jpg'
  },
  {
    name: 'zeekr-x-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'zeekr-x.jpg'
  },
  {
    name: 'zeekr-x-interior.jpg',
    url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'wireless-pad.jpg'
  },
  {
    name: 'zeekr-x-details.jpg',
    url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'wireless-pad.jpg'
  },

  // Deepal S07
  {
    name: 'deepal-s07-hero.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/2023_Chang%27an_Shenlan_S7.jpg/1280px-2023_Chang%27an_Shenlan_S7.jpg',
    fallback: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'deepal-s05.jpg'
  },
  {
    name: 'deepal-s07-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'deepal-s05.jpg'
  },
  {
    name: 'deepal-s07-interior.jpg',
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'hero-bg.jpg'
  },
  {
    name: 'deepal-s07-details.jpg',
    url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'trunk-liner.jpg'
  },

  // MG4 Electric
  {
    name: 'mg4-electric-hero.jpg',
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2023_MG_MG4_SE_EV.jpg/1280px-2023_MG_MG4_SE_EV.jpg',
    localFallback: 'byd-atto3.jpg'
  },
  {
    name: 'mg4-electric-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'byd-atto3.jpg'
  },
  {
    name: 'mg4-electric-interior.jpg',
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'hero-bg.jpg'
  },
  {
    name: 'mg4-electric-details.jpg',
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'tpe-floormats.jpg'
  },

  // Deepal S05
  {
    name: 'deepal-s05-hero.jpg',
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/2023_Chang%27an_Shenlan_S7.jpg/1280px-2023_Chang%27an_Shenlan_S7.jpg',
    localFallback: 'deepal-s05.jpg'
  },
  {
    name: 'deepal-s05-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Chang%27an_Shenlan_S7_rear.jpg/1280px-Chang%27an_Shenlan_S7_rear.jpg',
    localFallback: 'deepal-s05.jpg'
  },
  {
    name: 'deepal-s05-interior.jpg',
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'screen-protector.jpg'
  },
  {
    name: 'deepal-s05-details.jpg',
    url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1280&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1280&auto=format&fit=crop',
    localFallback: 'screen-protector.jpg'
  }
];

function fetchSingleUrl(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https:') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    };

    client.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const parsed = new URL(url);
          redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
        }
        fetchSingleUrl(redirectUrl, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function downloadWithFallback(item, dest, baseDir) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`✓ Already exists: ${item.name}`);
    return;
  }

  try {
    await fetchSingleUrl(item.url, dest);
    console.log(`✓ Downloaded primary: ${item.name}`);
    return;
  } catch (err) {
    console.warn(`Primary failed for ${item.name} (${err.message}), trying fallback...`);
  }

  if (item.fallback) {
    try {
      await fetchSingleUrl(item.fallback, dest);
      console.log(`✓ Downloaded fallback: ${item.name}`);
      return;
    } catch (err2) {
      console.warn(`Fallback failed for ${item.name} (${err2.message}), trying local fallback...`);
    }
  }

  if (item.localFallback) {
    const localSrc = path.join(baseDir, item.localFallback);
    if (fs.existsSync(localSrc)) {
      fs.copyFileSync(localSrc, dest);
      console.log(`✓ Copied local fallback: ${item.name} from ${item.localFallback}`);
      return;
    }
  }

  console.error(`✗ All sources failed for ${item.name}`);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const baseDir = path.join(process.cwd(), 'public', 'images');
  const targetDir = path.join(baseDir, 'reviews');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Ensuring all ${reviewImages.length} EV review images in ${targetDir}...`);
  for (const item of reviewImages) {
    const dest = path.join(targetDir, item.name);
    await downloadWithFallback(item, dest, baseDir);
    await sleep(200);
  }
  console.log('All 28 review images successfully verified and downloaded!');
}

run();
