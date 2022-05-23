'use strict';
const mongoose = require("mongoose");

const stringSchema = new mongoose.Schema({
    randomStr: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: { type: Date, expires: '1m', default: Date.now }

}, {
    //   timestamps: { createdAt: 'createdAt' },
    versionKey: false
});

const stringDb = mongoose.model("stringDb", stringSchema);

module.exports = stringDb;