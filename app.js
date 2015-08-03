'use strict';

/*
 * Initialize storage.
 */
var Storage = require('./storage'),
	storage = new Storage(),
	connection;

/*
 * Listen for the ready event.
 */
storage.on('ready', function (options) {
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

	// TODO: Initialize the connection to your database here. Assign the resulting connection object to the connection variable above.
});

/*
 * Listen for the data event.
 */
storage.on('data', function (data) {
	// TODO: Send data to the database. Use the already initialized connection variable above.
});