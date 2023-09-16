const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      default: 0
    },
    eta: {
      type: Date,
      default: Date.now
    },
    assigned_to: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    comments: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
