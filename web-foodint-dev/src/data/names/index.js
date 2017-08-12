var $ = function(db, obj) {
  this._db = db;
  this._obj = obj;
  return this.setup().then((ans) => {
    this._map = ans;
    return this;
  });
};
module.exports = $;

var _ = $.prototype;

_.add = require('./add');
_.delete = require('./delete');
_.find = require('./find');
_.get = require('./get');
_.set = require('./set');
_.setup = require('./setup');
