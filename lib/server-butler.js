var genHead = require('./genHeaderStatus');
var genContent = require('./handleContent');
var Router = require('./router');
var router = new Router();

function set(route, method, content) {
  router.set(route, method, content);
}

function retrieve(req, res) {
  var content = router.retrieve(req, res);
  genContent.handleContent(content, res);
}

module.exports = {
  set: set,
  retrieve: retrieve
};

