'use strict';

var inherits     = require('util').inherits,
	EventEmitter = require('events').EventEmitter;

function Platform() {
	if (!(this instanceof Platform)) {
		return new Platform();
	}

	EventEmitter.call(this);
	Platform.init.call(this);
}

inherits(Platform, EventEmitter);

Platform.init = function () {
	var self = this;

	process.on('message', function (m) {
		if (m.type === 'ready')
			self.emit('ready', m.data.options);
		else if (m.type === 'data')
			self.emit('data', m.data);
	});
};

Platform.prototype.sendLog = function(title, description) {
	process.send({
		type: 'log',
		data: {
			title: title,
			description: description
		}
	});
};

Platform.prototype.sendError = function(error) {
	process.send({
		type: 'error',
		data: {
			name: error.name,
			message: error.message,
			stack: error.stack
		}
	});
};

process.on('uncaughtException', function (error) {
	console.error('Uncaught Exception', error);
	process.send({
		type: 'error',
		data: {
			name: error.name,
			message: error.message,
			stack: error.stack
		}
	});
});

process.on('exit', function () {
	process.send({
		type: 'exit'
	});
});

process.on('SIGTERM', function () {
	process.send({
		type: 'terminate'
	});
});

module.exports = new Platform();