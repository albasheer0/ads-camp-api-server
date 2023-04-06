const fs = require('fs');
const csvParser = require('csv-parser');

async function readCSVFile(filePath) {
    return new Promise((resolve, reject) => {
        const data = [];

        fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => data.push(row))
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
    });
}

module.exports =  readCSVFile ;
