/**
 * Main application file
 */

'use strict';

var express = require('express');
var config = { "port" : 8080 };
var mysql = require('mysql');

// Connect to database
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'olalla',
      database : 'talleres',
    }
);
// connection.connect();

// Setup server
var app = express();
// app.mysqlConnection = connection;
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, function () {
    console.log('Express server listening on %d', config.port);
});

// Expose app
exports = module.exports = app;
