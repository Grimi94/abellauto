/**
 * Main application file
 */

'use strict';

var express = require('express');
var config = { "port" : 8080 };
// Connect to database

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./express')(app);
require('./routes')(app);


// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d', config.port));
});

// Expose app
exports = module.exports = app;
