import mongoose from "mongoose";
import studentModel from "../models/studentModel.js";

export const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Please provide all feilds",
      });
    }

    const student = await studentModel.findOne({ email });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not exist!",
      });
    }

    const isMatch = password === student.password;

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    res.status(200).json({
      success: true,
      message: "login successfully!",
      student,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while login admin",
    });
  }
};

//add student
export const addStudent = async (req, res) => {
  try {
    const { email } = req.body;

    const student = await studentModel.findOne({ email });
    if (student) {
      return res.status(404).json({
        success: false,
        message: "Student already exist!",
      });
    }

    const newStudent = await new studentModel(req.body).save();

    return res.status(200).json({
      success: true,
      message: "Student added",
      newStudent,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while add student",
    });
  }
};

//update student
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStudent = await studentModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    await updateStudent.save();
    return res.status(200).json({
      success: true,
      message: "Student updated!",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while update student",
    });
  }
};
//delete student
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await studentModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Student deleted!",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while update student",
    });
  }
};

//get student detail
export const getStudentDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findOne({ _id: id });
    return res.status(200).json(student);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while get student details",
    });
  }
};

//get all student

export const getAllStudentOfTheirClass = async (req, res) => {
  try {
    const students = await studentModel.find({ sclassName: req.params.id });
    return res.status(200).json(students);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while get student details",
    });
  }
};
