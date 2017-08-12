module.exports = function(req, res) {
  var A = Object.assign(req.params, req.body);
  if(typeof A.id!=='string' || !A.id) throw (
    new Error('groups.set: bad "id"')
  );
  if(typeof A.on!=='string' || !A.on) throw (
    new Error('groups.set: bad "on"')
  );
  if(typeof A.value!=='string' || !A.value) throw (
    new Error('groups.set: bad "value"')
  );
  this.set(A).then((ans) => res.json(A));
};
