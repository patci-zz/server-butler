"use strict";



function jsonParse(data){
  var reqData = JSON.parse(data.toString());

  return reqData;
}

module.exports.jsonParse = jsonParse;
