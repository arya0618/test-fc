'use strict';
const express = require('express')
const router = express.Router();
const morgan = require("morgan");


const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";

router.use(
    morgan(morganFormat, {
        skip: function(req, res) {
            return res.statusCode < 400;
        },
        stream: process.stderr
    })
);
router.use(
    morgan(morganFormat, {
        skip: function(req, res) {
            return res.statusCode >= 400;
        },
        stream: process.stdout
    })
);

// =============== server health check api ===========
router.get('/health', (req, res) => {
    res.send('Welcome to fashion colod test')
});


router.post('/create', async(req, res) => {

    try {

    } catch (err) {

    }


});

router.get('/read-all', async(req, res) => {

    try {

    } catch (err) {

    }


});

router.get('/read/:id', async(req, res) => {

    try {

    } catch (err) {

    }


});

// ============ API routes ==========

module.exports = router;