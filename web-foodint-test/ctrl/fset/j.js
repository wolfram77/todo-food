/* FSET.J: JSON interface for FSET.D */
/* @wolfram77 */
(function() {
var express = require('express');
var $d = require('./d');


var $ = function(db) {
	var x = express();
	var _d = new $d(db);
	x.get('/', (req, res) => {
		_d.find(req.body).then((a) => res.json(a));
	});
	x.search('/', (req, res) => {
		_d.search(req.query.k, req.query.v).then((a) => res.json(a));
	});
	x.post('/', (req, res) => {
		_d.search(req.query.k, req.query.v).then((a) => res.json(a));
	});
	x.get('/:k', (req, res) => {
		_d.get(req.params.k).then((a) => res.json(a));
	});
	x.delete('/:k', (req, res) => {
		_d.delete(req.params.k).then((a) => res.json(a));
	});
	return x;
};


module.exports = $;
})();
