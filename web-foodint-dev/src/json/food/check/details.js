module.exports = function(src, a) {
  if(a==null) throw (
    new Error(`${src}: bad "details"`)
  );
  if(a.description!=null && typeof a.description!=='string') throw (
    new Error(`${src}: bad "description"`)
  );
  if(a.image!=null && typeof a.image!=='string') throw (
    new Error(`${src}: bad "image"`)
  );
  if(a.url!=null && typeof a.url!=='string') throw (
    new Error(`${src}: bad "url"`)
  );
};
