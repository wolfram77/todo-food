var _ = require('lodash');

var $ = function(db, id, src, n) {
  return db.query(
    'SELECT "children" FROM "groups" WHERE "id"=$1;', [id]
  ).then((ans) => {
    if(!ans.rowCount) return [];
    var cids = n? ans.rows[0].children : [];
    return Promise.all(cids.reduce((acc, cid) => {
      acc.push($(db, cid, src, n-1));
      return acc;
    }, src? [id] : [])).then((ans) => _.flatten(ans));
  });
};
module.exports = $;
