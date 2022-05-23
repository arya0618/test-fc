'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const helmet = require("helmet");
const app = express();
require('dotenv').config()
const appConfig = require("./config/app-config");
const mongoose = require("mongoose");
const routes = require("./routes/index");
//=================Mongodb connect==========
const mongoConnect = require("./middleware/db-connect");

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors());
app.use(helmet());

const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "uat";

//============== routes ===========
app.use(appConfig.appConstants.baseRoute, routes);


//console.log("process.env.API_PORT:: ", process.env.API_PORT)
//=========server started=======
app.listen(process.env.API_PORT, () => {

    console.info(`Api listening on port ${process.env.API_PORT}!`);
});