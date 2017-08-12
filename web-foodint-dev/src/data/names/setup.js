module.exports = function() {
  return this._db.query(
    'CREATE TABLE IF NOT EXISTS "names" ('+
    '"id" TEXT,'+    // name of object
    '"value" TEXT,'+ // object id
    'PRIMARY KEY ("id")'+
    ');'
  ).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_names_value" ON '+
    '"names" ("value");'
  )).then(() => this._db.query(
    'SELECT * FROM "names";'
  )).then((ans) => {
    var z = new Map();
    for(var i=0, I=ans.rowCount; i<I; i++) {
      var r = ans.rows[i];
      z.set(r.id, r.value);
    }
    return z;
  });
};
