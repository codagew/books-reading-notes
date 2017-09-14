// constructor function
function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);

console.log(p);

// class
class Point2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

let p2 = new Point2();

console.log(typeof Point2);
console.log(Point2 === Point2.prototype.constructor);
console.log(p2.constructor === Point2.prototype.constructor);

// new operator
class Bar {
	doStuff() {
		console.log('stuff');
	}
}

var b = new Bar();
b.doStuff();