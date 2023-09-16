const Task = require("../models/TaskModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const apiResponse = require("../helpers/apiResponse");
const { constants } = require("../helpers/constants");

// CREATE TASK
const createTask = catchAsyncError(async (req, res, next) => {
  try {
    const { title, description, phoneNumber } = req.body;

    const task = await Task.create({
      title,
      description,
      phoneNumber,
      eta: Date.now() + 7 * 24 * 60 * 60 * 1000
    });

    return apiResponse.successResponseWithData(res, constants.task_created, task);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

// GET ALL TASKS
const getAllTask = catchAsyncError(async (req, res, next) => {
  try {
    const task = await Task.find();
    return apiResponse.successResponseWithData(res, "success", task || []);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

// GET SINGLE TASK
const getSingleTask = catchAsyncError(async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return apiResponse.notFoundResponse(res, constants.task_notFound);
    }
    return apiResponse.successResponseWithData(res, "Task Details", task);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
});

// UPDATE TASK
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return apiResponse.notFoundResponse(res, constants.task_notFound);
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      validators: true
    });

    return apiResponse.successResponseWithData(res, constants.task_updated, updatedTask);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return apiResponse.notFoundResponse(res, constants.task_notFound);
    }

    await Task.findByIdAndRemove(req.params.id);

    return apiResponse.successResponseWithData(res, constants.task_deleted, task);
  } catch (err) {
    return apiResponse.ErrorResponse(res, err);
    s;
  }
};

module.exports = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask
};
