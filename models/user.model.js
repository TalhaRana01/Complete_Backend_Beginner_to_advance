const e = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender:{
    type: String,
    enum: ["male", "female", "other"],
  }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
