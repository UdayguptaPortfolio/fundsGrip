const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader?.startsWith("Bearer ")) {
    return next(new ErrorHandler("Unauthorized", 401));
  }

  const token = authHeader?.split(" ")[1];
  console.log("token", token);
  const decodedData = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  next();
});
