module.exports = function(req, res) {
  var A = req.params;
  res.json(this.get(A.id));
};
