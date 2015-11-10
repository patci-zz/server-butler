var http = require('http');
var Router = require(__dirname + '/router');
var register = require('./registrar');
var fs = require('fs');
var butler = require(__dirname + '/server-butler');

// populate route object
var router = register(new Router());

var server = http.createServer(function (req, res) {
  butler.request(router, req, res);
});

server.listen(3000, function() {
  console.log('All systems operational');
});

