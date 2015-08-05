'use strict';

var platform = require('./platform'),
	connection;

/*
 * Listen for the ready event.
 */
platform.on('ready', function (options) {
	/*
	 * Connect to the database based on the options provided. See config.json
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
});

/*
 * Listen for the data event.
 */
platform.on('data', function (data) {
	// TODO: Insert the data to the database using the initialized connection.
});