var $ = function(src, a) {
  $.id(src, a.id);
  $.value(src, a.value);
};
module.exports = $;

$.id = require('./id');
$.value = require('./value');
