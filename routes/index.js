'use strict';
const express = require('express')
const router = express.Router();
const morgan = require("morgan");
const strController = require("../controller/string-controller")

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




// ============ API routes for create new record  ==========
router.post('/create', async(req, res) => {

    try {
        let result = await strController.createData(req, res)
        return result;
    } catch (err) {
        return res.json({ message: "write Operation failed" })
    }


});
// ============ API routes for read all records  ==========
router.get('/read-all', async(req, res) => {

    try {
        const result = await strController.getAllData(req, res)
        return result;
    } catch (err) {
        return res.json({ message: "Read all operation failed" })
    }


});

// ============ API routes for get data by given ID  ==========
router.get('/read/:id', async(req, res) => {

    try {
        console.log("debug params :", req.params.id)
        const result = await strController.getById(req, res)
        return result;
    } catch (err) {
        return res.json({ message: "Read all operation failed" })
    }

});

// ============ API routes for delete by given ID  ==========
router.delete('/remove/:id', async(req, res) => {

    try {
        console.log("debug params :", req.params.id)
        const result = await strController.removeById(req, res)
        return result;
    } catch (err) {
        return res.json({ message: "Read all operation failed" })
    }

});


// ============ API routes for delete all data ==========
router.get('/remove-all', async(req, res) => {

    try {
        console.log("debug params :", req.params.id)
        const result = await strController.removeAllData(req, res)
        return result;
    } catch (err) {
        return res.json({ message: "Read all operation failed" })
    }

});



module.exports = router;