import puppeteer from "puppeteer";

const taxRatesURL =
  "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/calculator.html#rt";

/**
 * Extracts the tax table data from the Canada Revenue Agency's GST and HST
 * rates page.
 *
 * @returns {string[][]} - A 2D array of strings where each subarray is a row
 *                         in the table, and each element in the subarray is
 *                         the text content of a cell in the table.
 */
export const extractTaxTableData = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(taxRatesURL, { waitUntil: "networkidle2" });

  await page.waitForSelector("table");

  const tableData = await page.evaluate(() => {
    const table = document.querySelector("table");
    const rows = Array.from(table.querySelectorAll("tr"));
    return rows.map((row) => {
      const cells = Array.from(row.querySelectorAll("th, td"));
      return cells.map((cell) => cell.innerText.trim());
    });
  });

  await browser.close();

  return tableData;
};
