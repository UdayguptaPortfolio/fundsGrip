const mongoose = require("mongoose");
const validator = require("validator");

const CustomerSchema = new mongoose.Schema({
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
    type: String
  },
  profession: {
    type: String
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);
