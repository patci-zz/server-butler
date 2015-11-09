"use strict";
var fs = require('fs');

function genHeaderStatus(string, response){
  var resData = {};

  if (string.indexOf(".json") != -1){
    response.setHeader(200, {"Content-Type": "application/json"});

  }else if(string.indexOf(".html") != -1){
    response.setHeader(200, {"Content-Type": "text/html"});

  }else if(string.indexOf(".png") != -1 || string.indexOf(".jpg") != -1 ||
  string.indexOf(".gif") != -1 || string.indexOf(".svg") != -1){
    response.setHeader(200, {"Content-Type" : image/string.slice(-3, str.length)});


  }else if(string.indexOf(".jpeg") != -1){
      response.setHeader(200, {"Content-Type": "image/jpeg"});

  }else if(string.indexOf(".js") != -1){
      response.setHeader(200, {"Content-Type": "application/javascript"});

  }else if(string.indexOf(".css") != -1){
        response.setHeader(200, {"Content-Type": "text/css"});

  }else{
      response.setHeader(200, {"Content-Type": "text/plain"});

    }
};

module.exports.genHeaderStatus = genHeaderStatus;
