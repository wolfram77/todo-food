var _keyword = require('./keyword');
var _columns = require('./columns');
var _from = require('./from');
var _where = require('./where');
var _orderby = require('./orderby');
var _groupby = require('./groupby');
var _having = require('./having');

module.exports = function(ast) {
  _keyword.call(this, ast);
  _columns.call(this, ast);
  if(ast.from!==null) _from.call(this, ast);
  if(ast.where!==null) _where.call(this, ast);
  if(ast.orderby!==null) _orderby.call(this, ast);
  if(ast.groupby!==null) _groupby.call(this, ast);
  if(ast.having!==null) _having.call(this, ast);
};
