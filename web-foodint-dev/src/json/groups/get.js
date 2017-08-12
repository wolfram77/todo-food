module.exports = function(req, res) {
  var A = req.params;
  this.get(A.id).then((ans) => {
    res.json(ans.rows);
  });
};
