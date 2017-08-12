module.exports = function(id) {
  return this._db.query('SELECT * FROM "food" '+
    'WHERE "id"=$1;',
    [id]
  );
};
