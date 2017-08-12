module.exports = function(id) {
  return this._db.query('DELETE FROM "food" '+
    'WHERE "id"=$1;',
    [id]
  );
};
