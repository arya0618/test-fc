'use strict';

// Development specific configuration


console.log(">>> log ", process.env.DB_URL);


module.exports.appConstants = {

    "baseRoute": "/api/v1"
};

module.exports.mongoConstants = {

    url: process.env.DB_URL,

};