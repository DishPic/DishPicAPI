var fs = require("fs");
const Papa = require('papaparse');

module.exports = {

  importData() {
    return new Promise((resolve, reject)=> {
      fs.readFile("./app/newLongCPTCodes.csv", "utf8", (err, data)=> {
        const csvString = data.toString();
        Papa.parse(csvString, {
          complete: (results)=> {
            const parsedData = results.data;

            const dataDict = {}
            for (var item of parsedData) {
              const code = item[0];
              if (!code) {
                continue
              }

              const codeItem = {
                code: code,
                longDescription: item[1],
                shortDescription: item[2]
              }

              dataDict[code] = codeItem;
            }

            resolve(dataDict);
          }
        });
      });

    })

  },





}
