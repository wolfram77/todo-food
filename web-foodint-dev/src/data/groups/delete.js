module.exports = function(id) {
  this._db.query(
    'UPDATE "groups" SET '+
    '"children"=array_remove("children", $1), '+
    '"ancestry"=array_remove("ancestry", $1) '+
    'WHERE "children" ? $1 OR "ancestry" ? $1;',
    [id]
  ).then(() => this._db.query(
    'DELETE FROM "groups" '+
    'WHERE "id"=$1;',
    [id]
  ));
};
