var type = require('./type');

module.exports = function(ast) {
  for(var i=0, I=ast.orderby.length; i<I; i++) {
    var a = ast.orderby[i];
    type.call(this, 'sql.groupby', a.expr);
  }
};
