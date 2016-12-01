
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.next = next;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;

	function clear() {
		this.dataStore = [];
		this.listSize = 0;
	}

	function find(elem) {
		for (var i = 0; i < this.dataStore.length; ++i) {
			if (this.dataStore[i] === elem) {
				return i;
			}
		}

		return -1;
	}

	function toString() {
		return this.dataStore;
	}

	function insert(elem, pos) {}

	function insertBefore(elem, elemDest) {

	}

	function insertAfter(elem, elemDest) {}

	function append(elem) {
		this.dataStore[this.listSize++] = elem;
	}

	function remove(elem) {
		var index = this.find(elem);

		if (index > -1) {
			this.dataStore.splice(index, 1);
			--this.listSize;

			return true;
		}

		return false;
	}

	function front() {}

	function next() {}

	function currPos() {}

	function moveTo() {}

	function getElement(elem) {

	}

	function length() {
		return this.listSize;
	}

	function contains() {}
}

function print(a) {
	console.log(a);
}

var names = new List()
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
print(names.toString());
names.remove('Raymond');
print(names.toString());