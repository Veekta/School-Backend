const studentModel = require("../../model/studentModel");
const performanceModel = require("../../model/performanceModel");
const subjectModel = require("../../model/subjectModel");
const mongoose = require("mongoose");

const createPerformance = async (req, res) => {
  try {
    const { performance } = req.body;

    const getSubject = await subjectModel.findById(req.params.subject);
    if (getSubject) {
      const getStudent = await studentModel.findById(req.params.student);
      const newPerformance = new performanceModel({
        subjectName: getSubject.subjectName,
        studentName: getStudent.fullname,
        performance,
      });
      newPerformance.subject = getSubject;
      newPerformance.student = getStudent;
      newPerformance.save();
      getSubject.studentsPerformance.push(
        mongoose.Types.ObjectId(newPerformance._id)
      );
      getSubject.save();
      getStudent.performance.push(mongoose.Types.ObjectId(newPerformance._id));
      getStudent.save();
      res
        .status(200)
        .json({ message: "performance created", data: newPerformance });
    } else {
      res.status(404).json({
        message: "something went wrong",
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePerformance = async (req, res) => {
  try {
    const getSubject = await subjectModel.findById(req.params.subject);
    const getStudent = await studentModel.findById(req.params.student);
    const remove = await performanceModel.findByIdAndRemove(
      req.params.performance
    );
    getSubject.studentsPerformance.pull(remove);
    getStudent.performance.pull(remove);
    getStudent.save();
    getSubject.save();
    res.status(200).json({ mesage: "performance deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};
const getSubjectPerformance = async (req, res) => {
  try {
    const subject = await subjectModel.findById(req.params.id).populate({
      path: "studentsPerformance",
      options: { sort: { createdAt: -1 } },
    });
    res.status(200).json({ mesage: "performance found", data: subject });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getStudentPerformance = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id).populate({
      path: "performance",
      options: { sort: { createdAt: -1 } },
    });
    res.status(200).json({ mesage: "performance found", data: student });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createPerformance,
  deletePerformance,
  getSubjectPerformance,
  getStudentPerformance,
};
