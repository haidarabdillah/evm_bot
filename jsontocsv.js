const fs = require('fs');
const { Parser } = require('json2csv');

const jsonData = JSON.parse(fs.readFileSync('address.json', 'utf8'));

const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData];

const json2csvParser = new Parser();
const csv = json2csvParser.parse(dataArray);

fs.writeFileSync('address.csv', csv);

console.log(' success and saved to address.csv');
