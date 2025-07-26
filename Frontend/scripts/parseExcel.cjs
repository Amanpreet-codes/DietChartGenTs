const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('./Anuvaad_INDB_2024.11.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const json = XLSX.utils.sheet_to_json(sheet);

fs.writeFileSync('./parsed-food-db.json', JSON.stringify(json, null, 2));
console.log('✅ Excel converted to JSON!');
