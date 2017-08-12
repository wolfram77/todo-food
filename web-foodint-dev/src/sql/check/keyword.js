module.exports = function(ast) {
  if(ast.type!=='select') throw (
    new Error('sql.keyword: only "select" supported')
  );
};
