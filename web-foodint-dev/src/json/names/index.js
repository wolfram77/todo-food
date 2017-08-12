var express = require('express');
var _add = require('./add');
var _delete = require('./delete');
var _find = require('./find');
var _get = require('./get');
var _set = require('./set');

module.exports = function($) {
  var x = express();
  x.get('/', (req, res) => _find.call($, req, res));
  x.post('/', (req, res) => _add.call($, req, res));
  x.get('/:id', (req, res) => _get.call($, req, res));
  x.put('/:id', (req, res) => _set.call($, req, res));
  x.delete('/:id', (req, res) => _delete.call($, req, res));
  return x;
};
