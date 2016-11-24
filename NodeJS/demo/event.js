
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some-event', function() {
	console.log('some event happened...');
});

setTimeout(function() {
	event.emit('some-event');
}, 5000);