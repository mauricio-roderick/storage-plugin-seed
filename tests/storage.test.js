/*
 * Just a sample code to test the storage plugin.
 * Kindly write your own unit tests for your own plugin.
 */
'use strict';

var cp     = require('child_process'),
	assert = require('assert'),
	storage;

describe('Storage', function () {
	describe('#spawn', function () {
		it('should spawn a child process', function () {
			assert.ok(storage = cp.fork(process.cwd()), 'Child process not spawned.');
		});
	});

	describe('#handShake', function () {
		it('should notify the parent process when ready within 5 seconds', function () {
			var initTimeout;

			storage.on('ready', function () {
				clearTimeout(initTimeout);
			});

			initTimeout = setTimeout(function () {
				assert.ok(false, 'Plugin init timeout.');
			}, 5000);

			storage.send({
				type: 'ready',
				data: {
					options: {
						config_field1: 'configfieldvalue',
						config_field2: 25
					}
				}
			}, function (error) {
				assert.ifError(error);
			});
		});
	});

	describe('#data', function () {
		it('should process the data', function () {
			storage.send({
				type: 'data',
				data: {
					key1: 'value1',
					key2: 121,
					key3: 40
				}
			}, function (error) {
				assert.ifError(error);
			});
		});
	});
});