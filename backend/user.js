const mongoose = require("mongoose");
const user = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", user);
