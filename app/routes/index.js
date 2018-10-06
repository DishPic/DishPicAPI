
const codeRoutes = require('./code_routes.js');

module.exports = (app, db, codeData) => {
  
  codeRoutes(app, db, codeData);
}
