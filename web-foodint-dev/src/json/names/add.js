var _check = require('./check');

module.exports = function(req, res) {
  var A = Object.assign({}, req.body);
  _check('names.add', A);
  this.add(A).then((ans) => res.json(A));
};
