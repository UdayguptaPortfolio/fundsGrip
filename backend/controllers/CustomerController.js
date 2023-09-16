const Customer = require("../models/CustomerModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const apiResponse = require("../helpers/apiResponse");
const { constants } = require("../helpers/constants");

// CREATE Employee
const createCustomer = catchAsyncError(async (req, res, next) => {
  try {
    const { email, name, phoneNumber, city, profession } = req.body;

    const customer = await Customer.create({
      email,
      name,
      phoneNumber,
      city,
      profession
    });

    return apiResponse.successResponseWithData(res, constants.employee_created, customer);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

const getAllCustomer = catchAsyncError(async (req, res, next) => {
  try {
    const customer = await Customer.find();
    return apiResponse.successResponseWithData(res, "success", customer || []);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

const getCustomerByPhoneNumber = catchAsyncError(async (req, res, next) => {
  try {
    const customer = await Customer.find({
      phoneNumber: req.body.phoneNumber
    });

    if (!customer) {
      return apiResponse.notFoundResponse(res, constants.customer_notFound);
    }
    return apiResponse.successResponseWithData(res, "Customer Details", customer);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

module.exports = {
  createCustomer,
  getAllCustomer,
  getCustomerByPhoneNumber
};
