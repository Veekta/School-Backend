const mongoose = require("mongoose");
const bursarSchema = mongoose.Schema({
  bursarName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
  schoolCode: {
    type: String,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  studentCode: {
    types: String,
  },
});
module.exports = mongoose.model("fee", bursarSchema);
