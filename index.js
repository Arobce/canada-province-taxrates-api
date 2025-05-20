import { extractTaxTableData } from "./services/scrapper.js";
import { tableDataToJSON } from "./services/json.js";
import { saveTaxDataToTimeStampAndLatestFile } from "./services/api.js";

// Table tax data
const tableTaxData = await extractTaxTableData();

// Save tax data to a JSON file
saveTaxDataToTimeStampAndLatestFile(tableDataToJSON(tableTaxData));