'use strict';
const mongoose = require("mongoose");

const stringSchema = new mongoose.Schema({
    randomStr: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: { createdAt: 'createdAt' }
});

const stringDb = mongoose.model("stringDb", stringSchema);

module.exports = stringDb;