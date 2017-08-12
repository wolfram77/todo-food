module.exports = function(req, res) {
  var P = req.params;
  this.get(P.id).then((ans) => {
    res.json(ans.rows);
  });
};
