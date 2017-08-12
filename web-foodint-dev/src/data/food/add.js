var md5 = require('md5');

module.exports = function(v) {
  v.id = md5([
    v.brand, v.type, v.grade, v.flavour, v.quantity, v.package
  ].join());
  return this._db.query('INSERT INTO "food" ('+
    '"id", "name", "quantity", "price", "details", '+
    '"brand", "type", "package", "grade", "flavour", "taste", '+
    '"shape", "cooking", "primary", "secondary", '+
    '"ingredients", "nutrients"'+
    ') VALUES ('+
    '$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '+
    '$11, $12, $13, $14, $15, $16, $17'+
    ');', [
      v.id, v.name, v.quantity, v.price, v.details,
      v.brand, v.type, v.package, v.grade, v.flavour, v.taste,
      v.shape, v.cooking, v.primary, v.secondary,
      v.ingredients, v.nutrients
    ]
  );
};
