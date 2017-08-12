var type = require('./type');

module.exports = function(ast) {
  for(var i=0, I=ast.groupby.length; i<I; i++) {
    var a = ast.groupby[i];
    type.call(this, 'sql.groupby', a);
  }
};
