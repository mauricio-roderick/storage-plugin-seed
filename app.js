'use strict';

var platform = require('./platform'),
	connection;

/**
 * Emitted when device data is received. This is the event to listen to in order to get real-time data feed from the connected devices.
 * @param {object} data The data coming from the device represented as JSON Object.
 */
platform.on('data', function (data) {
	// TODO: Insert the data to the database using the initialized connection.
	console.log(data);
});

/**
 * Emitted when the platform shuts down the plugin. The Storage should perform cleanup of the resources on this event.
 */
platform.once('close', function () {
	var domain = require('domain');
	var d = domain.create();

	d.once('error', function(error) {
		console.error(error);
		platform.handleException(error);
		platform.notifyClose();
		d.exit();
	});

	d.run(function() {
		// TODO: Release all resources and close connections etc.
		platform.notifyClose(); // Notify the platform that resources have been released.
		d.exit();
	});
});

/**
 * Emitted when the platform bootstraps the plugin. The plugin should listen once and execute its init process.
 * Afterwards, platform.notifyReady() should be called to notify the platform that the init process is done.
 * @param {object} options The options or configuration injected by the platform to the plugin.
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