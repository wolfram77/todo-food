module.exports = function() {
  return this._db.query(
    'CREATE TABLE IF NOT EXISTS "objects" ('+
    '"id" TEXT,'+    // object id
    '"value" TEXT,'+ // type
    'PRIMARY KEY ("id")'+
    ');'
  ).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_objects_value" ON '+
    '"objects" ("value");'
  )).then(() => this._db.query(
    'SELECT * FROM "objects";'
  )).then((ans) => {
    var z = new Map();
    for(var i=0, I=ans.rowCount; i<I; i++) {
      var r = ans.rows[i];
      z.set(r.id, r.value);
    }
    return z;
  });
};
