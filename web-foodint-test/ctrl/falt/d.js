/* FALT.D: Managet alternate names for FOOD fields in DB. */
/* @wolfram77 */
'use strict';
(function() {
var $z = require('../zed');


var $ = function(db) {
	this.db = db;
	this.db.query('CREATE TABLE IF NOT EXISTS falt(k TEXT PRIMARY KEY, v TEXT)');
	this.load().then((a) => { this.set = a.set; this.map = a.map; });
};


var _ = $.prototype;


_.get = function(k) {
	return this.map.get(k);
};


_.find = function(q) {
	var qv = [], qw = $z.querize(q, '%k LIKE $%i', ' AND ', qv, 1);
	return this.db.query('SELECT * FROM falt'+(qw? ' WHERE '+qw : ''), qv).then((res) => res? res.rows : null);
};


// this whould directly accept SQL query
_.search = function(k) {
	return this.db.query('SELECT * FROM falt WHERE k LIKE $1', [k]).then((res) => res? res.rows : null);
};


_.add = function(k, v) {
	return Promise.resolve().then(() => {
		if(!this.set.has(v) && k!==v) throw new Error('bad value');
		this.map.set(k, v); this.set.add(v);
		return this.db.query('INSERT INTO falt VALUES ($1, $2)', [k, v]).then((res) => res? res.rowCount : 0);
	});
};


_.delete = function(k) {
	this.map.delete(k); this.set.delete(k);
	return this.db.query('DELETE FROM falt WHERE k = $1', [k]).then((res) => res? res.rowCount : 0);
};


_.load = function() {
	var a = {'map': new Map(), 'set': new Set()};
	return Promise.all([
		this.db.query('SELECT * FROM falt').then((res) => res.rows.forEach((r) => a.map.set(r.k, r.v))),
		this.db.query('SELECT k FROM falt WHERE k = v').then((res) => res.rows.forEach((r) => a.set.add(r.k)))
	]).then(() => a);
};


module.exports = $;
})();
