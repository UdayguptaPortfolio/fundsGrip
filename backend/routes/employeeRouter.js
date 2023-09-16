var express = require("express");
const { isAuthenticated } = require("../middlewares/jwt");
const { createEmployee } = require("../controllers/EmployeeController");

var router = express.Router();

router.post("/create", createEmployee);

module.exports = router;
