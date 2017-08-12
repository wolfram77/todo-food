module.exports = function(v) {
  return this._db.query('INSERT INTO "food" ('+
    '"id", "name", "quantity", "price", "details", '+
    '"brand", "type", "package", "grade", "flavour", '+
    '"taste", "shape", "cooking", "primary", "secondary", '+
    '"ingredients", "nutrients"'+
    ') VALUES ('+
    '$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '+
    '$11, $12, $13, $14, $15, $16, $17'+
    ') ON CONFLICT ("id") '+
    'DO UPDATE SET '+
    '"name"=$2, "quantity"=$3, "price"=$4, "details"=$5, '+
    '"brand"=$6, "type"=$7, "package"=$8, "grade"=$9, "flavour"=$10, '+
    '"taste"=$11, "shape"=$12, "cooking"=$13, "primary"=$14, "secondary"=$15, '+
    '"ingredients"=$16, "nutrients"=$18;', [
      v.id, v.name, v.quantity, v.price, v.details,
      v.brand, v.type, v.package, v.grade, v.flavour, v.taste,
      v.shape, v.cooking, v.primary, v.secondary,
      v.ingredients, v.nutrients
    ]
  );
};
