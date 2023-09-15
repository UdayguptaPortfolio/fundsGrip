var express = require("express");
var authRouter = require("./auth");
const taskRouter = require("./taskRouter");
const employeeRouter = require("./employeeRouter");

var app = express();

app.use("/auth/", authRouter);
app.use("/task/", taskRouter);
app.use("/employee/", employeeRouter);

module.exports = app;
