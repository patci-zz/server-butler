//var handle = require('./genContentHandler');

var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {}
  };
};

Router.prototype.set = function(route, method, content) {
  var data = this.routes[method];
  //if (route === '/') {
  //  data[route] = {};
  //  data = data[route];
  //} else {
    var routes = route.split('/');
    for (i=0;i<routes.length;i++) {
      data['/' + routes[i]] = data['/' + routes[i]] || {};
      data = data['/' + routes[i]];
    };
  //}
  data.content = content;  
};

Router.prototype.retrieve = function(req, res) {
  // make sure route is 'GET'
  if (req.method !== 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I\'m only here to serve');
  }
  // if req.url has a ., then content = req.url
  if (req.url.indexOf('.') !== -1) {
  //  handle.handleContent(req.url, res);
  }
  // otherwise, match route to content file
  // if (this.routes[req.method][req.url].content) {
  //  handle.handleContent(this.routes[req.method][req.url].content, res);
  //}
  var routes = req.url.split('/');
  var data = this.routes[req.method];
  for(i=0;i<routes.length;i++) {
    if (data['/' + routes[i]]) {
      data = data['/' + routes[i]];
      console.log(data);
    }
    // if nothing else, return a 404
    //else {
    //  res.writeHead(404, {'Content-Type': 'text/plain'});
    //  res.end('Someone made a mistake somewhere.  Probably you');
    //}
  }
  
  return data.content.content;
};

