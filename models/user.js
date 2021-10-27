const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name required"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
