const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  author: { type: String },
  email: { type: String },
  fun: { type: String },
  status: { type: String },
  employed: { type: Date },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);
