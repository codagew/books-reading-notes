
var fibonacci = function (n) {
	if (0 === n) {
		return 0;
	}

	if (1 === n) {
		return 1;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
};

if (require.main === module) {
	var n = Number(process.argv[2]);
	console.log('fibonacci(', n , ') is ', fibonacci(n));
}

exports.fibonacci = fibonacci;