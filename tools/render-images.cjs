// Render og-image.png, favicon-32.png và apple-touch-icon.png bằng Playwright.
// Cần cài Playwright trước (npm i -D playwright && npx playwright install chromium), rồi chạy:
//   node tools/render-images.cjs
const { chromium } = require('playwright');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.join(__dirname, '..');
const out = (f) => path.join(root, 'assets/images', f);

(async () => {
  const browser = await chromium.launch(process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY } } : {});
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await ctx.newPage();

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(pathToFileURL(path.join(__dirname, 'og-template.html')).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out('og-image.png') });

  const svg = pathToFileURL(out('favicon.svg')).href;
  for (const [size, name] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png']]) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(`<html><body style="margin:0;background:#F5F1EA"><img src="${svg}" width="${size}" height="${size}" style="display:block"></body></html>`);
    await page.waitForTimeout(200);
    await page.screenshot({ path: out(name) });
  }
  await browser.close();
  console.log('Đã render og-image.png, favicon-32.png, apple-touch-icon.png');
})();
