var should = require('chai').should();
var add = require('../maths');

describe('Addition Tests', function() {
  it('should return 3 when passed one and two', function() {
    var numOne = 1;
    var numTwo = 2;
    var expectedResult = 3;
    var actualResult = add(numOne, numTwo);

    actualResult.should.equal(expectedResult);
  });

  it('should not return 3 when passed one and four', function() {
    var numOne = 1;
    var numTwo = 4;
    var expectedResult = 3;
    var actualResult = add(numOne, numTwo);

    actualResult.should.not.equal(expectedResult);
  });
});
