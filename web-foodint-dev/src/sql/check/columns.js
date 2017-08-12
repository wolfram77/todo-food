var exprToSQL = require('flora-sql-parser').util.astToSQL.exprToSQL;
var type = require('./type');

module.exports = function(ast) {
  if(typeof ast.columns==='string') return;
  for(var i=0, I=ast.columns.length; i<I; i++) {
    var a = ast.columns[i];
    if(!a.as) a.as = exprToSQL(a.expr);
    type.call(this, 'sql.columns', a.expr);
  }
};
