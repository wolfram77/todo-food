/* ZED: Basic utility functions. */
/* @wolfram77 */
'use strict';
(function() {
var $ = {};


$.querize = function(val, pat, sep, arr, i) {
	var q = [];
	arr = arr || [];
	i = i || arr.length;
	for(var k in val) {
		q.push(pat.replace(/%k/g, k).replace(/%i/g, i++));
		arr.push(val[k]);
	}
	return q.join(sep);
};


module.exports = $;
})();
