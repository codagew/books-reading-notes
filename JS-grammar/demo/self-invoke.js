
function makeCounter() {
	var i = 0;

	return function() {
		console.log(++i);
	};
}

var counter = makeCounter();
var counter2 = makeCounter();
counter();
counter();

counter2();
counter2();

var foo = function() {};

function () {}();

function foo() {}();

function foo() {}(1);

