import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const base = process.env.FRONTEND_TEST_URL || "http://127.0.0.1:3000";
const root = process.cwd();
const articles = fs
  .readdirSync(path.join(root, "src/app/(storefront)/articles"), {
    withFileTypes: true,
  })
  .filter(
    (entry) =>
      entry.isDirectory() &&
      fs.existsSync(
        path.join(
          root,
          "src/app/(storefront)/articles",
          entry.name,
          "page.tsx",
        ),
      ),
  )
  .map((entry) => `/articles/${entry.name}`);
const results = [];
async function page(route) {
  const response = await fetch(new URL(route, base), {
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 200, `${route}: expected HTTP 200`);
  results.push({ route, status: response.status });
  return response.text();
}
const home = await page("/");
for (const text of [
  "สต็อกพร้อมส่ง",
  "Shopee Mall",
  "ผ่านการทดสอบติดตั้งจริง",
  "EV-M3H-CC-TRAY",
  "priceThb",
  "representativeCost",
]) {
  assert(
    !home.includes(text),
    `Home must not contain demo/unsupported sales content: ${text}`,
  );
}
assert(home.includes("ยังไม่เปิดรับคำสั่งซื้อ"));
assert(
  !/href="(?:\/dealer|\/products|https:\/\/shopee.co.th[^\"]*)"/.test(home),
);
for (const id of [
  "vehicle-finder",
  "products",
  "ecosystem",
  "fitment-assurance",
  "featured-reviews",
])
  assert(home.includes(`id="${id}"`), `Missing legacy anchor ${id}`);
const product = await page("/product/p1");
assert(/name="robots" content="noindex, follow"/.test(product));
assert(product.includes("กำลังเตรียมเปิดตัว"));
assert(!product.includes("shopee.co.th"));
await page("/contact");
await page("/articles");
for (const route of articles) {
  const html = await page(route);
  assert(
    !html.includes("100% Direct Fitment"),
    `${route}: obsolete accessory promotion`,
  );
}
const expectedSlug = "/articles/zeekr-009-review";
const redirect = await fetch(new URL("/blog/zeekr-009-review", base), {
  redirect: "manual",
});
assert.equal(redirect.status, 308);
assert.equal(
  new URL(redirect.headers.get("location"), base).pathname,
  expectedSlug,
);
for (const route of ["/products", "/vehicles", "/api/export/shopee"]) {
  const response = await fetch(new URL(route, base));
  assert.equal(
    response.status,
    404,
    `Existing admin protection changed: ${route}`,
  );
}
let imageReferences = 0;
for (const file of fs
  .readdirSync(path.join(root, "src/app/(storefront)/articles"), {
    recursive: true,
  })
  .filter((f) => f.endsWith("page.tsx"))) {
  const source = fs.readFileSync(
    path.join(root, "src/app/(storefront)/articles", file),
    "utf8",
  );
  for (const match of source.matchAll(
    /["'`](\/(?:images\/[^"'`\s<>]+|logo[^"'`\s<>]*\.png))["'`]/g,
  )) {
    assert(
      fs.existsSync(path.join(root, "public", match[1])),
      `Missing local image: ${file} → ${match[1]}`,
    );
    imageReferences++;
  }
}
console.log(
  JSON.stringify(
    {
      status: "passed",
      pages: results,
      articleRoutes: articles.length,
      localImageReferences: imageReferences,
      legacyRedirect: "passed",
      adminProtection: "unchanged",
      note: "HTTP and source checks; does not replace browser interaction or full editorial fact verification.",
    },
    null,
    2,
  ),
);
