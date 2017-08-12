var _eval = require('./eval');

module.exports = function(v) {
  return _eval.children(this._db, v.value).then((ans) => {
    v.children = ans;
    return _eval.ancestry(this._db, v.id, true, -1);
  }).then((ans) => {
    ans.shift();
    v.ancestry = ans;
  }).then(() => this._db.query(
    'INSERT INTO "groups" '+
    '("id", "on", "value", "children", "ancestry") '+
    'VALUES ($1, $2, $3, $4, $5) '+
    'ON CONFLICT ("id") '+
    'DO UPDATE SET '+
    '"on"=$2, "value"=$3, "children"=$4, "ancestry"=$5;',
    [v.id, v.on, v.value, v.children, v.ancestry]
  ));
};
