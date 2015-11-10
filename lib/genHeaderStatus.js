"use strict";
var fs = require('fs');

function genHeaderStatus(string, response){
  var resData = {};

  if (string.indexOf(".json") !== -1){
    resData.contentType = "application/json";

  }else if(string.indexOf(".html") !== -1){
    resData.contentType = "text/html";

  }else if(string.indexOf(".png") !== -1 || string.indexOf(".jpg") !== -1 ||
  string.indexOf(".gif") !== -1 || string.indexOf(".svg") !== -1){
    resData.contentType = "image/" + string.slice(-3, str.length);

  }else if(string.indexOf(".jpeg") !== -1){
      resData.contentType = "image/jpeg";


  }else if(string.indexOf(".js") !== -1){
      resData.contentType = "application/javascript";

  }else if(string.indexOf(".css") !== -1){
        resData.contentType = "text/css";

  }else{
      resData.contentType = "text/plain";

  }
  response.setHeader('status', 200);
  response.setHeader("Content-Type", resData.contentType);
};

module.exports.genHeaderStatus = genHeaderStatus;

