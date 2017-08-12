var _check = require('./check');

module.exports = function(req, res) {
  var A = Object.assign({}, req.body);
  if(A.id!=null) throw (
    new Error('food.add: unexpected "id"')
  );
  if(typeof A.name!=='string' || !A.name) throw (
    new Error('food.add: bad "name"')
  );
  if(typeof A.quantity!=='number' || !(A.quantity>0)) throw (
    new Error('food.add: bad "quantity"')
  );
  if(typeof A.quantity!=='number' || !(A.price>0)) throw (
    new Error('food.add: bad "price"')
  );
  _check.details(A.details);
  
  this.add(A).then((ans) => {
    res.json(ans.rowCount);
  });
};
