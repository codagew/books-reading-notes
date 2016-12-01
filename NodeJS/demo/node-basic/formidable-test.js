
var http = require('http');
var formidable = require('formidable');
var util = require('util');

http.createServer(function(req, res) {
	if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
		var form = new formidable.IncomingForm();

		form.parse(req, function(err, fields, files) {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.write('Received upload: \n\n');
			res.write(util.inspect({ fields: fields, files: files }));
			res.end();
		});

		return;
	}

	res.writeHead(200, { 'Content-Type': 'text/html' });
	var body = '<form action="/upload" enctype="multipart/form-data"' + 
		'method="post">' + 
		'<input type="text" name="title"><br>' + 
		'<input type="file" name="upload" multiple="multiple"><br>' + 
		'<input type="submit" value="Upload">' + 
		'</form>';
	res.write(body);
	res.end();
}).listen(8888);