var expect = require('chai').expect
var Router = require(__dirname + '/../lib/router');

describe('The router', function() {
  before(function() {
    this.router = new Router();
    this.router.set('/hello/world', 'GET', 'hello world');
    this.req = {'method':'GET','url':'/hello/world'};
    this.res = {};
  });

  it('should be able to set routes', function() {
    expect(this.router.routes['GET']['/']['/hello']['/world'].content).to.eql('hello world');
  });

  before(function() {
    this.data = this.router.retrieve(this.req, this.res);
  });
  it('shoud retrieve a route', function() {
    expect(this.data).to.eql('hello world');
  });
});
