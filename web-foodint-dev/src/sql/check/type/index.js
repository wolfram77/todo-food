var _db = require('./db');
var _table = require('./table');
var _column = require('./column');

module.exports = function(src, ast) {
  if(!ast || typeof ast!=='object') return;
  if(ast instanceof Array) {
    for(var v of ast)
      this.call(this, v);
  }
  else if(typeof ast.table==='undefined') {
    for(var k in ast)
      this.call(this, ast[k]);
  }
  else {
    if(ast.db!=null) _db.call(this, src, ast);
    if(ast.table!=null) _table.call(this, src, ast);
    if(ast.column!=null) _column.call(this, src, ast);
  }
};
