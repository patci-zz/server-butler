var json = require(__dirname + '/json-parse');


var buf = new Buffer('{"username":"xyz", "password":"xyz@123"}', "utf-8");

console.log(json.jsonParse(buf));
