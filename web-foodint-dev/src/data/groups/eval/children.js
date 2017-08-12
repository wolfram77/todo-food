var _ = require('lodash');
var _lineage = require('./lineage');

module.exports = function(db, val) {
  return Promise.all(val.reduce((acc, v) => {
    var n = v.search(/[^#]/);
    acc.push(_lineage(db, v.substring(n), false, n));
    return acc;
  }, [])).then((ans) => _.flatten(ans));
};
