'use strict';

var platform = require('./platform'),
	connection;

/*
 * Listen for the data event.
 */
platform.on('data', function (data) {
	// TODO: Insert the data to the database using the initialized connection.
	console.log(data);
});

/*
 * Event to listen to in order to gracefully release all resources bound to this service.
 */
platform.on('close', function () {
	var domain = require('domain');
	var d = domain.create();

	d.on('error', function(error) {
		console.error(error);
		platform.handleException(error);
		platform.notifyClose();
	});

	d.run(function() {
		// TODO: Release all resources and close connections etc.
		platform.notifyClose(); // Notify the platform that resources have been released.
	});
});

/*
 * Listen for the ready event.
 */
platform.once('ready', function (options) {
	/*
	 * Connect to the database or file storage service based on the options provided. See config.json
	 *
	 * Sample Parameters:
	 *
	 * Username = options.username
	 * Password = options.password
	 * Host = options.host
	 * Port = options.port
	 * Database = options.database
	 * Table/Collection = options.table or options.collection
	 *
	 * Note: Option Names are based on what you specify on the config.json.
	 */

	// TODO: Initialize the connection to your database here.
	console.log(options);
	platform.notifyReady();
});