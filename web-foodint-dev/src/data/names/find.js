var _zed = require('../../zed');

module.exports = function(a) {
  var par = [];
  var exp = _zed.querize(par, '"%k" LIKE $%i', ' AND ', a);
  return this._db.query(
    'SELECT * FROM "names"'+
    (exp? ' WHERE '+exp : '')+';',
    par
  );
};
