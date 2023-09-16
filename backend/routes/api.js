var express = require("express");
var authRouter = require("./auth");
const taskRouter = require("./taskRouter");
const employeeRouter = require("./employeeRouter");
const customerRouter = require("./customer");

var app = express();

app.use("/auth/", authRouter);
app.use("/task/", taskRouter);
app.use("/employee/", employeeRouter);
app.use("/customer/", customerRouter);

module.exports = app;
