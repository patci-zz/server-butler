var genHead = require('./genHeaderStatus');
var genContent = require('./handleContent');

function request(router, req, res) {
  var content = router.retrieve(req, res);

  genContent.handleContent(content, res);
}

module.exports = {
  request: request
};

