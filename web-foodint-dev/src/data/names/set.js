module.exports = function(a) {
  if(this._obj.get(a.value)==null) throw (
    new Error(`names.set: bad value "${a.value}"`)
  );
  this._map.set(a.id, a.value);
  return this._db.query(
    'INSERT INTO "names" '+
    '("id", "value") '+
    'VALUES ($1, $2) '+
    'ON CONFLICT ("id") '+
    'DO UPDATE SET '+
    '"value"=$2;',
    [a.id, a.value]
  );
};
