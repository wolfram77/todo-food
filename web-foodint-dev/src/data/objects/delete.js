var $ = function(id) {
  this._map.delete(id);
  return this._db.query(
    'DELETE FROM "objects" '+
    'WHERE "id"=$1;',
    [id]
  );
};
