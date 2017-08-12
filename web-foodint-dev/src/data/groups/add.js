var _eval = require('./eval');

module.exports = function(v) {
  return Promise.all([
    _eval.children(this._db, v.value),
    _eval.ancestry(this._db, v.id, true, -1)
  ]).then((ans) => {
    ans[1].shift();
    v.children = ans[0];
    v.ancestry = ans[1];
  }).then(() => this._db.query(
    'INSERT INTO "groups" '+
    '("id", "on", "value", "children", "ancestry") '+
    'VALUES ($1, $2, $3, $4, $5);',
    [v.on, v.id, v.value, v.children, v.ancestry]
  ));
};
