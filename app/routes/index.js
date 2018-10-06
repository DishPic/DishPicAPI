
const codeRoutes = require('./code_routes.js');
const fileRoutes = require('./file_routes.js');

module.exports = (app, db, codeData) => {

  codeRoutes(app, db);
  fileRoutes(app, db);
}
