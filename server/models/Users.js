const mongoose = require("mongoose");
const { yearSchema, yearObj } = require("./Year");

const currYear = new Date().getFullYear();

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  monthlyLimit: {
    type: Number,
    required: true,
  },
  dailyLimit: {
    type: Number,
    required: true,
  },
  data: {
    [currYear]: {
      type: Object,
      default: yearObj,
    },
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
