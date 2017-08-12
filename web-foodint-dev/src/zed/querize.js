module.exports = function(dat, fmt, sep, val) {
	var qry = [];
	dat = dat || [];
	i = dat.length+1;
	for(var k in val) {
		qry.push(fmt.replace(/%k/g, k).replace(/%i/g, i++));
		dat.push(val[k]);
	}
	return qry.join(sep);
};
