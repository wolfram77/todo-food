module.exports = function(src, ast) {
  var a = this._nam.get(ast.column);
  if(a==null) throw (
    new Error(`${src}: bad column "${ast.column}"`)
  );
  ast.column = a;
};
