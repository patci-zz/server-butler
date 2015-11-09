"use strict";
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var fs = require('fs');
var http = require('http');
var generate = require(__dirname + "/../genHeaderStatus");

describe('a function that takes a string and sets content header',function(){

  it('takes a string and appropriately modifies the content-type',function(){
    var response = {
        "Header": {
        "Content-Type":"text/plain"
      },
      setHeader: function(key, value){
        this["Header"][key] = value;
      }
    };
    generate.genHeaderStatus("dummy-text", response);
    expect(response["Header"]["Content-Type"]).to.eql('text/plain');
  });

  it('takes a string and adds a 200 status', function(){
    var response = {
        "Header": {
        "Content-Type":"text/plain"
      },
      setHeader: function(key, value){
        this["Header"][key] = value;
      }
    };
    var resData = generate.genHeaderStatus("dummy-text", response);
    expect(resData.status).to.eql(200);
  });



});
