import express from "express";
import {
  adminLogin,
  adminRegister,
  getAllClasses,
  getAllStudents,
  getAllSubjects,
  getAllTeacher,
} from "../controllers/adminController.js";
import { createClass } from "../controllers/classController.js";
import {
  addteacher,
  deleteTeacher,
  getTeacherDetail,
  updateTeacher,
} from "../controllers/teacherController.js";
import { addSubject } from "../controllers/subjectController.js";
import {
  addStudent,
  deleteStudent,
  getStudentDetail,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/admin-register", adminRegister);
router.post("/admin-login", adminLogin);

//class
router.post("/create-class", createClass);
router.get("/get-all-class", getAllClasses);

//teacher
router.post("/add-teacher", addteacher);
router.get("/get-all-teacher", getAllTeacher);
router.delete("/delete-teacher/:id", deleteTeacher);
router.put("/update-teacher/:id", updateTeacher);
router.get("/get-teacher-detail/:id", getTeacherDetail);

//subject
router.post("/add-subject", addSubject);
router.get("/get-all-subjects", getAllSubjects);

//student
router.post("/add-student", addStudent);
router.get("/get-all-students", getAllStudents);
router.put("/update-student/:id", updateStudent);
router.delete("/delete-student/:id", deleteStudent);
router.get("/get-student-detail/:id", getStudentDetail);
export default router;
