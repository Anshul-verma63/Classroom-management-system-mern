import express from "express";
import {
  getStudentByClass,
  teacherLogin,
} from "../controllers/teacherController.js";

const router = express.Router();

router.post("/teacher-login", teacherLogin);
router.get("/get-student-by-class/:id", getStudentByClass);

export default router;
