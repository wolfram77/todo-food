module.exports = function(req, res) {
  var A = req.params;
  this.delete(A.id).then((ans) => {
    res.json(ans.rowCount);
  });
};
