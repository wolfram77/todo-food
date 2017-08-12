/* FOOD.D: Manage information about food in DB. */
/* @wolfram77 */
'use strict';
(function() {
var md5 = require('md5');
var $z = require('../zed');


var $ = function(db) {
	this.db = db;
	this.db.query('CREATE TABLE IF NOT EXISTS food(k UUID PRIMARY KEY, ima TEXT, nam TEXT, des TEXT, qua REAL, pri REAL, ing JSONB, nut JSONB, nue JSONB)');
};


var _ = $.prototype;


_.get = function(k) {
	return this.db.query('SELECT * FROM food WHERE k = $1', [k]).then((res) => res? res.rows[0] : null);
};


_.find = function(q) {
	var qv = [], qw = $z.querize(q, '%k LIKE $%i', ' AND ', qv, 1);
	return this.db.query('SELECT * FROM food'+(qw? ' WHERE '+qw : ''), qv).then((res) => res? res.rows : null);
};


_.add = function(v) {
	v.k = md5(v.nam);
	return this.db.query('INSERT INTO FOOD VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [v.k, v.ima, v.nam, v.des, v.qua, v.pri, v.ing, v.nut]).then((res) => res? res.rowCount : 0);
};


_.edit = function(k, v) {
	var qv = [k], qw = $z.querize(v, '%k = $%i', ', ', qv, 2);
	return this.db.query('UPDATE food SET '+qw+' WHERE k = $1', qv).then((res) => res? res.rowCount : 0);
};


_.delete = function(k) {
	return this.db.query('DELETE FROM food WHERE k = $1', [k]).then((res) => res? res.rowCount : 0);
};


module.exports = $;
})();
