var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {}
  };
};

Router.prototype.set = function(route, method, cb) {
  this.routes[method][route] = cb;  
};

Router.prototype.retrieve = function(route, method) {
  return this.routes[method][route]();
};

