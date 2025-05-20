const puppeteer = require('puppeteer');

const taxRatesURL = "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/calculator.html#rt";

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the target URL
  await page.goto(taxRatesURL, { waitUntil: 'networkidle2' });

  // Get the full page content
  const content = await page.content();
  console.log(content);

  // Close the browser
  await browser.close();
})();
