
function route(handle, pathname, response, postData) {
	console.log('postData:', postData);

	if (typeof handle[pathname] === 'function') {
		console.log('About to route a request for', pathname);

		handle[pathname](response, postData);
	} else {
		console.log('No request handler found...');
		
		response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.write('404 Not Found');
		response.end();
	}

}

exports.route = route;