var astToSQL = require('flora-sql-parser').util.astToSQL;
var check = require('./check');

module.exports = function(val) {
  var val = val.trim(), i = val.indexOf(';');
  if(i>=0 && i<val.length-1) throw (
    new Error('sql.run: only one statement supported')
  );
  var ast = this._par.parse(val);
  check.call(this, ast);
  return this._db.query(astToSQL(ast));
};
