var butler = require('server-butler');
var http = require('http');

butler.set('/home', 'GET', 'Greetings!');
var server = http.createServer(function(req, res) { 
  butler.retrieve(req, res); 
});

server.listen(3000, function() {
  console.log('All systems operational');
})
