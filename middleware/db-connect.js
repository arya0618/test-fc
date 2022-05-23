'use strict';
const mongoose = require("mongoose");
const { mongoConstants } = require("../config/app-config")

// console.info(">>> ", process.env.DB_URL);


/**
 * Database connectivity
 */

mongoose.connect(process.env.DB_URL, mongoConstants.options)
    .then(function(connection) {
        console.info(`Connected to Mongo database "${connection.connections[0].name}"`);
    })
    .catch(function(error) {
        console.error('error connecting to mongo', error);
    });