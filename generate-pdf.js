
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const reportPath = path.resolve(__dirname, 'reports', 'cucumber-report.html');

  // Open the HTML report file
  await page.goto(`file://${reportPath}`, { waitUntil: 'networkidle0' });

  // Save the report as a PDF
  await page.pdf({
    path: 'reports/cucumber-report.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('PDF report generated at reports/cucumber-report.pdf');
})();
