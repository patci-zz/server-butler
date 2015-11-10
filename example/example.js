var butler = require('server-butler');
var http = require('http');

butler.set('/home', 'GET', 'Greetings!');
http.createServer(function(req, res) { 
  butler.retrieve(req, res); 
});
