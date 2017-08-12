var _zed = require('../../zed');
var _check = require('./check');

module.exports = function(req, res) {
  var A = Object.assign({}, req.body);
  _check('names.find', A);
  A.id = _zed.wildcardize(A.id);
  A.value = _zed.wildcardize(A.value);
  this.find(A).then((ans) => res.json(ans.rows));
};
