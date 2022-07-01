const {
  createTeacher,
  verifiedTeacher,
  signinTeacher,

  getTeachers,
  getTeacher,
  deleteTeacher,
  updateTeacher,
  passwordReset,
  newPasswordRequest,
  // getAllTeacherStudents,
} = require("../TeacherFile/TeacherController");

const { Image2 } = require("../../utils/multer");
const express = require("express");
const router = express.Router();

router.route("/").get(getTeachers);

router.route("/register").post(createTeacher);

router.route("/signin").post(signinTeacher);

router.route("/:id/:token").get(verifiedTeacher);

router.route("/reset").post(newPasswordRequest);
router.route("/reset/:id/:token").post(passwordReset);

router.route("/:id").get(getTeacher);
// router.route("/:id/students").get(getAllTeacherStudents);

router
  .route("/:id/")
  // .get(getTeacher)
  .patch(Image2, updateTeacher)
  .delete(deleteTeacher);

module.exports = router;
