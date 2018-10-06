const App = require('../../App.js');


const getCodeDataGlobal = App.getCodeDataGlobal;

module.exports = (app, db, codeData) => {

  app.get('/allCodes', (req, res)=> {
    const codeDataGlobal = getCodeDataGlobal();

    res.send(codeDataGlobal);
  })


  app.post('/code', (req, res)=> {
    const codeDataGlobal = getCodeDataGlobal();

    if (req.body.code) {
      const code = req.body.code;
      const codeItem = codeDataGlobal[code];
      res.send(codeItem);

    } else if (req.body.codes) {
      const codeDict = req.body.codes;
      const resultDict = {}
      for (var key in codeDict) {
        const code = codeDict[key];
        resultDict[code] = codeDataGlobal[code];
      }

      res.send(resultDict);
    }

  })


}
