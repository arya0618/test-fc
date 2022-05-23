'use strict';
const stringModel = require("../model/string-model");
const randomstring = require("randomstring");
const apiResponse = require("../middleware/response")
const mongoose = require('mongoose');
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.createData = async function(req, res) {
    console.log("start function create controller -")
    try {
        //   await registerUser.registerUser({ OrgMSP: "Org1MSP", userId: req.body.email });
        let newData = new stringModel()
        newData.randomStr = randomstring.generate();
        let saveDb = await newData.save()
        console.log("saveDb :", saveDb)
        if (saveDb) {
            return apiResponse.successResponseWithData(res, "data created", saveDb);
        }

    } catch (err) {
        return apiResponse.errorResponse(res, err);
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getAllData = async function(req, res) {
    console.log("start function create controller -")
    try {


        let getDatafromDb = await stringModel.find()
        console.log("getDatafromDb :", getDatafromDb)
        if (getDatafromDb.length !== 0) {
            return apiResponse.successResponseWithData(res, "read all data", getDatafromDb);
        } else {
            return apiResponse.notFoundResponse(res, "Database is empty", );
        }

    } catch (err) {
        return apiResponse.errorResponse(res, err);
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getById = async function(req, res) {
    console.log("start function getById controller -")
    try {


        let getDatafromDb = await stringModel.find({ _id: mongoose.Types.ObjectId(req.params.id) })
        console.log("getDatafromDb :", getDatafromDb)
        if (getDatafromDb.length !== 0) {
            return apiResponse.successResponseWithData(res, "Data found on given Id", getDatafromDb[0]);
        } else {
            //return apiResponse.notFoundResponse(res, "Data not found", );
            let newData = new stringModel()
            newData.randomStr = randomstring.generate();
            let saveDb = await newData.save()
            console.log("saveDb :", saveDb)
            if (saveDb) {
                return apiResponse.successResponseWithData(res, "new record created", saveDb);
            }
        }

    } catch (err) {
        return apiResponse.errorResponse(res, err);
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.removeById = async function(req, res) {
    console.log("start function removeById controller -")
    try {


        let dbResponse = await stringModel.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) })
        console.log("dbResponse :", dbResponse)
        if (dbResponse.deletedCount !== 0) {
            return apiResponse.successResponse(res, "Data deleted on given Id");
        } else {
            return apiResponse.notFoundResponse(res, "Data not found", );
        }

    } catch (err) {
        return apiResponse.errorResponse(res, err);
    }

}


module.exports.removeAllData = async function(req, res) {
    console.log("start function removeAllData controller -")
    try {

        let dbResponse = await stringModel.deleteMany()
        console.log("dbResponse :", dbResponse)
        if (dbResponse.deletedCount !== 0) {
            return apiResponse.successResponse(res, "All data removed from database");
        } else {
            return apiResponse.notFoundResponse(res, "Data not found", );
        }

    } catch (err) {
        return apiResponse.errorResponse(res, err);
    }

}