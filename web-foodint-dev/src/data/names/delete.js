var $ = function(id) {
  this._map.delete(id);
  return this._db.query(
    'DELETE FROM "names" '+
    'WHERE "id"=$1;',
    [id]
  );
};
