/* FSET.D: Manage sets for FOODs in DB. */
/* @wolfram77 */
'use strict';
(function() {
var $z = require('../zed');


var $ = function(db) {
	this.db = db;
	this.db.query('CREATE TABLE IF NOT EXISTS FSET(k TEXT PRIMARY KEY, v JSONB)');
};


var _ = $.prototype;


_.get = function(k) {
	return this.db.query('SELECT * FROM FSET WHERE k = $1', [k]).then((res) => res? res.rows[0].v : null);
};


_.find = function(q) {
	var qv = [], qw = $z.querize(q, '%k LIKE $%i', ' AND ', qv, 1);
	return this.db.query('SELECT * FROM FSET'+(qw? ' WHERE '+qw : ''), qv).then((res) => res? res.rows : null);
};


_.search = function(k) {
	return this.db.query('SELECT * FROM FSET WHERE k LIKE $1', [k]).then((res) => res? res.rows : null);
};


_.add = function(k, v) {
	return this.db.query('INSERT INTO FSET VALUES ($1, $2)', [k, v]).then((res) => res? res.rowCount : 0);
};


_.delete = function(k) {
	return this.db.query('DELETE FROM FSET WHERE k = $1', [k]).then((res) => res? res.rowCount : 0);
};


module.exports = $;
})();
