var _check = require('./check');

module.exports = function(req, res) {
  var A = Object.assign(req.params, req.body);
  _check.value('names.set', A.value);
  this.set(A).then((ans) => res.json(A));
};
