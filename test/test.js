var should = require('chai').should();
var sinon = require('sinon');
var add = require('../maths');

describe('Addition Tests', function() {
  it('should log result of add', function() {
    var numOne = 1;
    var numTwo = 2;
    var logSpy = sinon.spy();
    add(numOne, numTwo, logSpy);
    logSpy.called.should.be.true;
  });

  it('should log with result of add', function() {
    var numOne = 1;
    var numTwo = 2;
    var logSpy = sinon.spy();
    add(numOne, numTwo, logSpy);
    logSpy.calledWith(3).should.be.true;
  });
});
