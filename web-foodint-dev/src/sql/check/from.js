var exprToSQL = require('flora-sql-parser').util.astToSQL.exprToSQL;
var type = require('./type');

module.exports = function(ast) {
  for(var i=0, I=ast.from.length; i<I; i++) {
    var a = ast.from[i];
    if(!a.as) a.as = a.table;
    type.call(this, 'sql.from', a);
  }
};
