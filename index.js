const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://twitter.com/elonmusk/status/1787174814626556170'; // এখানে তোমার টুইট লিংক বসাও

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113.0.0.0 Safari/537.36');

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    console.log('Tweet loaded!');
    await page.waitForTimeout(7000);
  } catch (e) {
    console.error('Failed to load tweet:', e.message);
  }

  await browser.close();
  console.log('Finished!');
})();
