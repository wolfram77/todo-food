module.exports = function(req, res) {
  var A = Object.assign({}, req.body);
  if(typeof A.id!=='string' || !A.id) throw (
    new Error('groups.add: bad "id"')
  );
  if(typeof A.on!=='string' || !A.on) throw (
    new Error('groups.add: bad "on"')
  );
  if(typeof A.value!=='object' || !(A.value instanceof Array)) throw (
    new Error('groups.add: bad "value"')
  );
  this.add(A).then((ans) => {
    res.json(ans.rowCount);
  });
};
