
let PersonType2 =(function() {
	'use strict';

	const PersonType2 = function(name) {
		if (typeof new.target === 'undefined') {
			throw new Error('Constructor must be called with new');
		}

		this.name = name;
	}

	Object.defineProperty(PersonType2.prototype, 'sayName', {
		value: function() {
			if (typeof new.target !== 'undefined') {
				throw new Error('Method cannot be called with new');
			}
		}, 
		enumerable: false, 
		writable: true, 
		configurable: true
	});

	return PersonType2;
}());