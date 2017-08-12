module.exports = function(src, a) {
  if(typeof a!=='string' || !a) throw (
    new Error(`${src}: bad "id"`)
  );
};
