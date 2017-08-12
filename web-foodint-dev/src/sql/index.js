var Parser = require('flora-sql-parser').Parser;

var $ = function(db, nam) {
  this._db = db;
  this._nam = nam;
  this._par = new Parser();
  return this.setup(this);
};
module.exports = $;

var _ = $.prototype;
_.run = require('./run');
_.setup = require('./setup');
