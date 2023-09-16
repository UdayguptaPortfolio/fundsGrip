const Employee = require("../models/EmployeeModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const apiResponse = require("../helpers/apiResponse");
const { constants } = require("../helpers/constants");

// CREATE Employee
const createEmployee = catchAsyncError(async (req, res, next) => {
  try {
    const { email, name, phoneNumber, city, uidai } = req.body;

    const employee = await Employee.create({
      email,
      name,
      phoneNumber,
      city,
      uidai
    });

    return apiResponse.successResponseWithData(res, constants.employee_created, employee);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

module.exports = {
  createEmployee
};
