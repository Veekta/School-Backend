const express = require("express");
const router = express.Router();
const {
  createSubject,
  getAllSubjects,
  getSubjectsInAClass,
  getSubjectInClass,
} = require("../subjectFile/subjectContoller");

router.route("/:id").post(createSubject);
router.route("/").get(getAllSubjects);
router.route("/:subject").get(getSubjectInClass);
router.route("/:classID").get(getSubjectsInAClass);
module.exports = router;
