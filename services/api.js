import fs from "fs";
import path from "path";


/**
 * Generates a timestamped filename based on the current date.
 *
 * @returns {string} - A string representing the current date in the format 'YYYY-MM-DD',
 *                     which is used as the timestamp for the filename.
 */

const getTimestampedFilename = () => {
    const now = new Date();
    const timestamp = now.toISOString().split("T")[0];
    return timestamp;
}


/**
 * Saves the tax data to a JSON file with a timestamped filename
 * and also to a file named "latest.json".
 * 
 * @param {object} taxData - The tax data to be saved
 * @param {string} [outputDir] - The directory to save the files to
 */
export const saveTaxDataToTimeStampAndLatestFile = (taxData, outputDir = "./api") => {
    if(!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const fileName = getTimestampedFilename();
    const filePath = path.join(outputDir, `${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(taxData), "utf-8");

    // Store latest data
    storeLatestAPIData(fs, outputDir, taxData);

    console.log(`Tax data for saved to ${filePath}`);
}


/**
 * Store the latest API data in a JSON file.
 *
 * Write the provided tax data to a file named `latest.json` in the specified 
 * output directory. This file always contains the most recent tax data.
 *
 * @param {Object} fs - File system module for file operations
 * @param {String} outputDir - Directory where the latest JSON file will be stored
 * @param {Object[]} taxData - The tax data to store in the JSON file
 */

export const storeLatestAPIData = (fs, outputDir, taxData) => {
    const filePathLatest = path.join(outputDir, "latest.json");
    fs.writeFileSync(filePathLatest, JSON.stringify(taxData), "utf-8");

    console.log(`Tax data for saved to ${filePathLatest}`);
}