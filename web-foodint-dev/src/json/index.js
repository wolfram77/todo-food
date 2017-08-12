var express = require('express');
var _food = require('./food');
var _groups = require('./groups');
var _names = require('./names');

module.exports = function($) {
  var x = express();
  x.use('/food', _food($.food));
  x.use('/groups', _groups($.groups));
  x.use('/names', _names($.names));
  return x;
};
