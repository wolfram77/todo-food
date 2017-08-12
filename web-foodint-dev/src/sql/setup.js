var express = require('express');

module.exports = function($) {
  var x = express();
  x.get('/:val', (req, res) => {
    var P=req.params;
    try {
      $.run(P.val).then(
        (ans) => res.json(ans.rows),
        (err) => res.status(400).json(err.message)
      );
    }
    catch(err) { res.status(400).json(err.message); }
  });
  return x;
};
