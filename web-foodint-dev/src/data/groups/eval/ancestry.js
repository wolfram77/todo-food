var _ = require('lodash');

var $ = function(db, id, src, n) {
  return db.query(
    'SELECT "id" FROM "groups" WHERE "children" ? $1;', [id]
  ).then((ans) => {
    var rows = ans.rowCount && n? ans.rows : [];
    return Promise.all(rows.reduce((acc, row) => {
      acc.push($(db, row.id, src, n-1));
      return acc;
    }, src? [id] : [])).then((ans) => _.flatten(ans));
  });
};
module.exports = $;
