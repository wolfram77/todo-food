var pgconfig = require('pg-connection-string').parse;
var bodyParser = require('body-parser');
var EventEmitter = require('events');
var express = require('express');
var http = require('http');
var _ = require('lodash');
var pg = require('pg');
var $falt = require('./ctrl/falt/j');
var $fset = require('./ctrl/fset/j');
var $food = require('./ctrl/food/j');


// settings
var falt, fset, food;
var url = process.env.DATABASE_URL;
var uroot = __dirname+'/html';
var e = new EventEmitter();
pg.defaults.ssl = true;


// connect to db
console.log('pg.connect: '+url);
var pool = new pg.Pool(pgconfig(url));
pool.connect(function(err, db, done) {
	if(err) throw err;
	console.log('pg.connect: done');
	falt = new $falt(pool);
	fset = new $fset(pool);
	food = new $food(pool);
	e.emit('ready');
	done();
});


// set up server
e.on('ready', () => {
	console.log('server: setting up');
	var x = express();
	x.use(bodyParser.json());
	x.use(bodyParser.urlencoded({'extended': true}));
	x.use((req, res, next) => {
		req.body = _.assign(req.body, req.query);
		next();
	});
	x.use('/j/falt', falt);
	x.use('/j/fset', fset);
	x.use('/j/food', food);
	x.all('/', function(req, res) {
		res.sendFile(uroot+'/index.html');
	});
	x.use('/', express.static(uroot));
	var server = http.createServer(x);
	server.listen(process.env.PORT||80, function() {
		console.log('server: done');
	});
});
