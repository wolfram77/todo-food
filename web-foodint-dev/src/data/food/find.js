var _ = require('lodash');
var _zed = require('../../zed');

module.exports = function(v) {
  var par = [];
  var exp = _zed.querize(par, '"%k" = $%i', ' AND ', _.pick(v, [
    'id', 'quantity', 'price'
  ])) + _zed.querize(par, '"%k" LIKE $%i', ' AND ', _.pick(v, [
    'name', 'brand', 'type', 'package', 'grade', 'flavour',
    'taste', 'shape', 'cooking', 'primary', 'secondary'
  ])) + _zed.querize(par, '"%k" ?& $%i', ' AND ', _.pick(v, [
    'details', 'ingredients', 'nutrients'
  ]));
  return this._db.query(
    'SELECT * FROM "food"'+
    (exp? ' WHERE '+exp : '')+';',
    par
  );
};
