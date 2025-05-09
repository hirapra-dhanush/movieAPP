const express = require('express')
const dotenv = require('dotenv')
const DB = require("./src/db/db")
const { ErrorMiddle } = require('./src/middlewares/ErrorMiddl')
const router = require('./src/router/user_router')
const app = express()
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
DB();
app.use('/api/v1/ath', router);
app.use(ErrorMiddle)

module.exports = app;