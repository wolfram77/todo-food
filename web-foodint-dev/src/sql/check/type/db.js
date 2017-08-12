module.exports = function(src, ast) {
  if(ast.db!=null) throw (
    new Error(`${src}: bad database "${ast.db}"`)
  );
};
