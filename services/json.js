import { getNumberFromPercentage } from "../utils.js";

/**
 * Converts the table data from the scrapper into a JSON object.
 *
 * @param {string[][]} tableData - The table data from the scrapper
 * @returns {object[]} - An array of objects with province, gst_and_hst and pst properties
 */
export const tableDataToJSON = (tableData) => {
  const taxData = [];

  // Skip the header row (index 0)
  for (let i = 1; i < tableData.length; i++) {
    const row = tableData[i];
    taxData.push({
      province: row[0],
      gst_and_hst: getNumberFromPercentage(row[1]),
      pst: getNumberFromPercentage(row[2]),
    });
  }

  return taxData;
};

