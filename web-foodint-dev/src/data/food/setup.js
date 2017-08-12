module.exports = function(db) {
  return this._db.query('CREATE TABLE IF NOT EXISTS "food" ('+
    '"id" UUID,'+           // identification
    '"name" TEXT,'+         // name
    '"quantity" REAL,'+     // quantity in kg or l
    '"price" REAL,'+        // price in inr
    '"details" JSONB,'+     // description, image, url
    '"brand" TEXT,'+        // group on: brand
    '"type" TEXT,'+         // group on: type
    '"package" TEXT,'+      // group on: package
    '"grade" TEXT,'+        // group on: grade
    '"flavour" TEXT,'+      // group on: flavour
    '"taste" TEXT,'+        // group on: taste
    '"shape" TEXT,'+        // group on: shape
    '"cooking" TEXT,'+      // group on: cooking
    '"primary" TEXT,'+      // group on: main ingredient
    '"secondary" TEXT,'+     // group on: secondary ingredient
    '"ingredients" JSONB,'+ // ingredients
    '"nutrients" JSONB,'+   // nutrients
    'PRIMARY KEY("id")'+
    ');'
  ).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_name" '+
    'ON "food" ("name");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_quantity" '+
    'ON "food" ("quantity");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_price" '+
    'ON "food" ("price");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_brand" '+
    'ON "food" ("brand");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_type" '+
    'ON "food" ("type");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_package" '+
    'ON "food" ("package");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_grade" '+
    'ON "food" ("grade");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_flavour" '+
    'ON "food" ("flavour");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_taste" '+
    'ON "food" ("taste");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_shape" '+
    'ON "food" ("shape");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_cooking" '+
    'ON "food" ("cooking");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_primary" '+
    'ON "food" ("primary");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_secondary" '+
    'ON "food" ("secondary");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_ingredients" '+
    'ON "food" USING GIN ("ingredients");'
  )).then(() => this._db.query(
    'CREATE INDEX IF NOT EXISTS "idx_food_nutrients" '+
    'ON "food" USING GIN ("nutrients");'
  ));
};
