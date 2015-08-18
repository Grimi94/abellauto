/**
* Express configuration
*/

'use strict';

var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');

module.exports = function(app) {
    // app.set('views', config.root + '/server/views');
    app.set('view engine', 'html');

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', 'client');
    app.use(errorHandler()); // Error handler - has to be last
};
