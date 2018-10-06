const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importing data

const codeDataImporter = require('./app/codeDataImporter.js');
var codeDataGlobal = {};
codeDataImporter.importData().then((data)=> {
  codeDataGlobal = data
});

function getCodeDataGlobal() {
  return codeDataGlobal
}
module.exports = {getCodeDataGlobal: getCodeDataGlobal};


const codeData = {};
require('./app/routes')(app, {}, codeData);


app.get('/', (req, res) => res.send("Hi, welcome to Codigma"))
app.get('*', (req, res) => res.send("API Endpoint not supported"))

app.listen(process.env.PORT || port, () => console.log(`app listening on port ${port}`))
