module.exports = function(a) {
  this._map.set(a.id, a.value);
  return this._db.query(
    'INSERT INTO "objects" '+
    '("id", "value") '+
    'VALUES ($1, $2) '+
    'ON CONFLICT ("id") '+
    'DO UPDATE SET '+
    '"value"=$2;',
    [a.id, a.value]
  );
};
