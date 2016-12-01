var main = require('./main.js');
var should = require('should');

describe('app-lesson6.test.js', function() {
	it('should equal to 55 when n = 10', function () {
		main.fibonacci(10).should.equal(55);
	});
});