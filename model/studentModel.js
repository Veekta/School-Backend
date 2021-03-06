const mongoose = require("mongoose");

const studentModel = mongoose.Schema(
  {
    schoolName: {
      type: String,
    },

    schoolCode: {
      type: String,
    },

    studentCode: {
      type: String,
    },

    teachCode: {
      type: String,
    },

    classCode: {
      type: String,
    },
    nameOfClass: {
      type: String,
    },
    parentName1: {
      type: String,
    },
    parentName2: {
      type: String,
    },
    parentPhone: {
      type: Number,
    },

    fullName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
    },
    DOB: {
      type: String,
    },
    Address: {
      type: String,
    },
    FathersOccupation: {
      type: String,
    },
    displayName: {
      type: String,
    },

    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    verified: {
      type: Boolean,
      default: true,
    },

    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admins",
    },

    gender: {
      type: String,
    },
    profile: {
      type: String,
    },

    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teachers",
    },

    status: {
      type: String,
      default: "student",
    },
    performance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "performance",
      },
    ],
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classes",
    },
    feeStatus: {
      type: Boolean,
      Default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("students", studentModel);
