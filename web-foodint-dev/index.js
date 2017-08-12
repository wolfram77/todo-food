var pgconfig = require('pg-connection-string').parse;
var bodyParser = require('body-parser');
var express = require('express');
var EventEmitter = require('events');
var http = require('http');
var _ = require('lodash');
var pg = require('pg');

var DFood = require('./src/data/food');
var DGroups = require('./src/data/groups');
var DNames = require('./src/data/names');
var IJson = require('./src/json');
var ISql = require('./src/sql')

// settings
var idata = {}, ijson, isql;
var e = new EventEmitter();
var url = process.env.DATABASE_URL;
pg.defaults.ssl = true;

// connect to db
console.log('pg.connect: '+url);
var pool = new pg.Pool(pgconfig(url));
pool.connect(function(err, db, done) {
	if(err) throw err;
	console.log('pg.connect: done');
	idata.food = new DFood(pool);
	idata.groups = new DGroups(pool);
	idata.names = new DNames(pool);
	ijson = new IJson(idata);
	isql = new ISql(pool, idata.names);
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
	x.use('/json', ijson);
	x.use('/sql', isql);
	x.get('/', (req, res) => {
		res.sendFile(__dirname+'/README.md');
	});
	// x.use('/', express.static(uroot));
	var server = http.createServer(x);
	server.listen(process.env.PORT||80, function() {
		console.log('server: done');
	});
});
