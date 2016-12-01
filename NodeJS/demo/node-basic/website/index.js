var server = require('./server');
var routes = require('./routes');
var requestHandler = require('./request-handler');

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(routes.route, handle);