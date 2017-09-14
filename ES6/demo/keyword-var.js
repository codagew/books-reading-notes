
function getValue(condition) {
	console.log('value1:', value);
	if (condition) {
		var value = 'blue';

		console.log('value2:', value);
		return value;
	} else {
		console.log('value3:', value);
		return null;
	}
}

getValue(true);
console.log('====================');
getValue(false);