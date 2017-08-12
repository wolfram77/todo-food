module.exports = function(id) {
  return this._db.query(
    'SELECT * FROM "groups" '+
    'WHERE "id"=$1;',
    [id]
  );
};
