const {
  createStudent,
  signinStudent,
  deleteStudentFromAdnin,
  getStudents,
  updateStudent,
  getStudent,
  passwordReset,
  newPasswordRequest,
  getTeacher,
  deleteStudenFromClass,
  deleteFromTeacher,
} = require("../studentsFile/studentsController");

const { Image3 } = require("../../utils/multer");
const express = require("express");
const router = express.Router();

router.route("/:id").get(getStudent);
router.route("/register/:admin/:teacher").post(createStudent);

router.route("/signin").post(signinStudent);

router.route("/reset").post(newPasswordRequest);
router.route("/reset/:id/:token").post(passwordReset);

// // router.route("/:id/school").get(getTeacherSchool);

//Teacher ID
router.route("/:id/students").get(getStudents);
router.route("/teacher/:teacher").get(getTeacher);

router.route("/:id").patch(Image3, updateStudent);
router.route("/:id/:admin/").delete(deleteStudentFromAdnin);

router.route("/:id/:class").delete(deleteStudenFromClass);

router.route("/:id/:teacher").delete(deleteFromTeacher);

module.exports = router;
