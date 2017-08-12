var _ = require('lodash');
var _zed = require('../../zed');

module.exports = function(v) {
  var par = [];
  var exp = _zed.querize(par, '"%k" LIKE $%i', ' AND ', _.pick(v, [
    'id', 'on'
  ])) + _zed.querize(par, '"%k" ?& $%i', ' AND ', _.pick(v, [
    'value', 'children', 'ancestry'
  ]));
  return this._db.query(
    'SELECT * FROM "groups"'+
    (exp? ' WHERE '+exp : '')+';',
    par
  );
};
