# 🇨🇦 Canada Province Tax Rates Scraper

This project scrapes **GST, HST, and PST** tax rates for Canadian provinces from the official [Canada Revenue Agency](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/calculator.html#rt) page. The extracted data is saved daily in JSON format.

The scraper uses **Puppeteer** for headless browsing and **GitHub Actions** to automate the process on a daily schedule.

---

## 🚀 Features

- 🔍 Scrapes live tax data from a government site
- 📊 Converts table data into structured JSON
- 📅 Saves each run as a date-stamped file + `latest.json`
- 🕒 Runs automatically every day using GitHub Actions
- 🧱 Modular code structure for reusability and clarity

---

## 📡 Accessing the API

This project generates JSON files containing tax rate data, which can be used as a basic API or data source.

### 🔹 Latest Tax Rates

Always up-to-date with the latest successful scrape:

`https://raw.githubusercontent.com/Arobce/canada-province-taxrates-api/main/api/latest.json`

### 🔹 Historical Tax Rates (by Date)

You can access historical snapshots by date using this pattern:

`https://raw.githubusercontent.com/Arobce/canada-province-taxrates-api/main/api/YYYY-MM-DD.json`

For example:

`https://raw.githubusercontent.com/Arobce/canada-province-taxrates-api/main/api/2025-05-20.json`


#### 📁 Example Output

File: `api/2025-05-20.json`

```json
[
  { "province": "Alberta", "gst_and_hst": 5, "pst": 0 },
  { "province": "British Columbia", "gst_and_hst": 5, "pst": 7 },
  { "province": "Manitoba", "gst_and_hst": 5, "pst": 7 },
  { "province": "New Brunswick", "gst_and_hst": 15, "pst": "N/A" },
  { "province": "Newfoundland and Labrador", "gst_and_hst": 15, "pst": "N/A" },
  { "province": "Northwest Territories", "gst_and_hst": 5, "pst": 0 },
  { "province": "Nova Scotia", "gst_and_hst": 14, "pst": 0 },
  { "province": "Nunavut", "gst_and_hst": 5, "pst": 0 },
  { "province": "Ontario", "gst_and_hst": 13, "pst": "N/A" },
  { "province": "Quebec", "gst_and_hst": 5, "pst": 9.975 },
  { "province": "Prince Edward Island", "gst_and_hst": 15, "pst": "N/A" },
  { "province": "Saskatchewan", "gst_and_hst": 5, "pst": 6 },
  { "province": "Yukon", "gst_and_hst": 5, "pst": 0 }
]
```

---

## 🤖 Daily Automation (GitHub Actions)
The workflow .github/workflows/daily-tax-scrapper.yml runs daily at 06:00 UTC.

It does the following:

- Checks out the code
- Installs dependencies
- Runs the scraper via node index.js
- Commits the new JSON file(s) to the repo

## ✅ Cron Job Schedule

```
on:
  schedule:
    - cron: '0 6 * * *'  # Daily at 06:00 UTC
```

---

## 🙌 Contributing

Pull requests and issues are welcome! Feel free to fork, improve, and contribute.

---

## 📜 License

This project is open source under the MIT License.

---
