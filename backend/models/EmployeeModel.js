const mongoose = require("mongoose");
const validator = require("validator");

const EmployeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"]
  },
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    minLength: [3, "Name must have three characters"],
    maxLength: [12, "Name must not exceed 12 characters"]
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please Enter Phone Number"]
  },
  city: {
    type: String,
    required: [true, "Please Enter City"]
  },
  uidai: {
    type: String,
    required: [true, "Please Enter Uidai"]
  }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
