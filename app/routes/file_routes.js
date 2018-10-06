var parseFormdata = require('parse-formdata');
var Tesseract = require('node-tesseract');
var fs = require('fs');

module.exports = (app, db) => {

  app.post('/recognizeImage', (req, res)=> {
    parseFormdata(req, function (err, data) {
      if (err) throw err

      if (!data || !data.parts || data.parts.length <= 0 ) {
        res.statusCode = 400;
        res.header("Access-Control-Allow-Origin", "*");
        res.end('Empty input file');
        return
      }

      const randomNumber = Math.floor(Math.random() * 100000);
      const fileName = `${__dirname}/../uploads/UploadedFile${randomNumber}`;
      data.parts[0].stream.pipe(fs.createWriteStream(fileName)).on('close', ()=> {

        Tesseract.process(fileName, (err, text)=> {
          if(err) {
              console.error(err);
              return
          }

          const emptyCodeArray = [];
          if (!text || text == "") {
            res.statusCode = 200;
            res.header("Access-Control-Allow-Origin", "*");
            res.send(emptyCodeArray);
            return
          }

          const codeArray = text.split('\n');
          const filteredCodeArray = codeArray.filter((currCode, index, arr)=> {
            const codeText = currCode.trim();
            return codeText !== ""
          });

          if (!filteredCodeArray || filteredCodeArray.length <= 0) {
            res.statusCode = 200;
            res.header("Access-Control-Allow-Origin", "*");
            res.send(emptyCodeArray)
            return
          }

          // for (code of filteredCodeArray) {
          //   console.log("Item:", code);
          // }

          res.header("Access-Control-Allow-Origin", "*");
          res.send(filteredCodeArray)

          fs.unlink(fileName, (err) => {
            if (err) throw err;
            console.log(`${fileName} was deleted`);
          });
        });

      });
    })
  })


  app.post('/uploadFile', (req, res)=> {
    parseFormdata(req, function (err, data) {
      if (err) throw err

      if (!data || !data.parts || data.parts.length <= 0) {
        res.end('Empty input file');
        return
      }

      const part = data.parts[0];
      const fileStream = part.stream;

      res.end('Be kind to each other')
    })

  })

}
