var Router = require(__dirname + '/router.js');
var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;

var theRouter = new Router();

function httpRequest(req, res) {
  res.writeHead(STATUS, {CONTENT_TYPE});  // This can pull in from router
  res.write(CONTENT);  // based on the request type.
  res.end();
}

// Or we can go this direction:

function start(route, handle) {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request for ' + pathName + ' received');
    route(handle, pathName, response, request);
  }

http.createServer(httpRequest).listen(port, function() {
  console.log('Server listening on http://localhost:%s', port);
});

module.exports = httpRequest;
