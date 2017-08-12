module.exports = function(src, ast) {
  var a = this._nam.get(ast.table);
  if(a==null) throw (
    new Error(`${src}: bad table "${ast.table}"`)
  );
  ast.table = a;
};
