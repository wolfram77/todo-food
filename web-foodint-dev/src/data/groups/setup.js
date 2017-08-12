module.exports = function() {
  return this._db.query(
    'CREATE TABLE IF NOT EXISTS "groups" ('+
    '"id" TEXT,'+        // name of group
    '"on" TEXT,'+        // on column
    '"value" JSONB,'+    // definition
    '"children" JSONB,'+ // children
    'PRIMARY KEY (id)'+
    ');'
  ).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_groups_on" ON '+
    '"groups" ("value");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_groups_value" ON '+
    '"groups" USING GIN ("value");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_groups_children" ON '+
    '"groups" USING GIN ("children");'
  )).then(() => this._db.query(
    'CREATE TABLE IF NOT EXISTS "groupslineage" ('+
    '"id" TEXT,'+
    '"child" TEXT,'+
    'PRIMARY KEY (id)'+
    ');'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_groupslineage_child" ON '+
    '"groupslineage" ("child");'
  ));
};
