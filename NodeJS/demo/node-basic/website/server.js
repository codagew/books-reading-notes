var http = require('http');
var url = require('url');
var formidable = require('formidable');

// http.createServer(function(req, res) {
// 	res.writeHead(200, { 'Content-Type': 'text/plain' });
// 	res.write('Hello, World!');
// 	res.end();
// }).listen(8000);

/* 传递函数 
function onRequest(req, res) {
	console.log('Request received...');
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write('Hello, World!');
	res.end();
}

http.createServer(onRequest).listen(8000);

console.log('Server has started...');
*/

function start(route, handle) {
	function onRequest(req, res) {
		var postData = '';
		var pathname = url.parse(req.url).pathname;

		req.setEncoding('UTF8');

		req.addListener('data', function(postDataChunk) {
			console.log('postDataChunk:', postDataChunk);
			postData += postDataChunk;
		});

		req.addListener('end', function() {
			route(handle, pathname, res, postData);
		});
		
		// route(handle, pathname, res);
	}

	http.createServer(onRequest).listen(8000);

	console.log('Server has started...');
}

exports.start = start;