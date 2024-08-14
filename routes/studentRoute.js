import express from "express";
import {
  getAllStudentOfTheirClass,
  studentLogin,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/student-login", studentLogin);
router.get("/get-student/:id", getAllStudentOfTheirClass);

export default router;
