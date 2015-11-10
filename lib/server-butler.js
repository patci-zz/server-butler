// var router = require('./router');
var genHead = require('./genHeaderStatus');
var genContent = require('./handleContent');

function request(router, req, res) {
  var content = router.retrieve(req, res);
  console.log('the content is: ' + content);
  genContent.handleContent(content, res);
}

module.exports = {
  request: request
};

