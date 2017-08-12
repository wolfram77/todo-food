module.exports = function(req, res) {
  var P = req.params;
  this.delete(P.id).then((ans) => {
    res.json(ans.rowCount);
  });
};
