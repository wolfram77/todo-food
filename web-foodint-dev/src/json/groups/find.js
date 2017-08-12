module.exports = function(req, res) {
  var A = Object.assign({}, req.body);
  if(A.id!=null && typeof A.id!=='string') throw (
    new Error('groups.find: bad "id"')
  );
  if(A.on!=null && typeof A.on!=='string') throw (
    new Error('groups.find: bad "on"')
  );
  if(A.value!=null && !(A.value instanceof Array)) throw (
    new Error('groups.find: bad "value"')
  );
  if(A.children!=null && !(A.children instanceof Array)) throw (
    new Error('groups.find: bad "children"')
  );
  if(A.ancestry!=null && !(A.ancestry instanceof Array)) throw (
    new Error('groups.find: bad "ancestry"')
  );
  this.find(B).then((ans) => {
    res.json(ans.rows);
  });
};
