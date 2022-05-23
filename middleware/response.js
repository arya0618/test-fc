"use strict";
const { StatusCodes } = require('http-status-codes');


exports.successResponse = function(res, msg) {
    let data = {
        status: true,
        message: msg
    };
    return res.status(StatusCodes.OK).json(data);
};

exports.successResponseWithData = function(res, msg, data) {
    let resData = {
        status: true,
        message: msg,
        data: data
    };
    return res.status(StatusCodes.OK).json(resData);
};

exports.errorResponse = function(res, msg) {
    let data = {
        status: false,
        message: msg

    };
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(data);
};

exports.notFoundResponse = function(res, msg) {
    let data = {
        status: false,
        message: msg
    };
    return res.status(StatusCodes.NOT_FOUND).json(data);
};

exports.validationError = function(res, msg, data = []) {
    let resData = {
        status: false,
        message: msg,
        data: data
    };
    return res.status(StatusCodes.BAD_REQUEST).json(resData);
};

exports.unauthorizedResponse = function(res, msg) {
    let data = {
        status: false,
        message: msg
    };
    return res.status(StatusCodes.UNAUTHORIZED).json(data);
};