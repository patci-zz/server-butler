"use strict";
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
var http = require('http');
var handler = require(__dirname + '/../lib/handleContent');

describe('content handler', function(){
  it("should take string and response object write string and content headers", function(){
    var response = {
        "header": {
          "Content-Type":"text/plain",
          "status":5,
        },
        setHeader: function(key, value){
        this["header"][key] = value;
        },
        write: function(string){
          return string;
        },
        getHeader: function(){
          return this.header['Content-Type'];
        },
        end: function(object){
          return object;
        }
    };
    var tester = handler.handleContent("dummy-text", response);
    expect(response['header'].status).to.eql(200);
    expect(response['header']["Content-Type"]).to.eql("text/plain");

  });

  it("should take a file and return the html", function(){
    var response = {
        "header": {
          "Content-Type":"text/plain",
          "status":5,
        },
        setHeader: function(key, value){
        this["header"][key] = value;
        },
        write: function(string){
          return string;
        },
        getHeader: function(){
          return this.header['Content-Type'];
        },
        end: function(object){
          return object;
        }
    };

    handler.handleContent("index.html", response);
    expect(response['header'].status).to.eql(200);
    expect(response['header']["Content-Type"]).to.eql("text/html");

  });

});
