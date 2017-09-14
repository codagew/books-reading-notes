function PersonType(name) {
	this.name = name;
}

PersonType.prototype.sayName = function() {
	console.log(this.name);
}

let person = new PersonType('Nicholas');
person.sayName();

console.log(person instanceof PersonType);
console.log(person instanceof Object);