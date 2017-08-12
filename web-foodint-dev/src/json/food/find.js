module.exports = function(req, res) {
  var B = req.body;
  this.find(B).then((ans) => {
    res.json(ans.rows);
  });
};
