import adminModel from "../models/adminModel.js";
import studentModel from "../models/studentModel.js";
import subjectModel from "../models/subjectModel.js";
import teacherModel from "../models/teacherModel.js";
import classModel from "../models/classModel.js";

export const adminRegister = async (req, res) => {
  try {
    const isExist = await adminModel.findOne({ email: req.body.email });
    if (isExist) {
      return res.status(400).json({
        success: false,
        message: "Admin already exist!",
      });
    }

    const newAdmin = await new adminModel(req.body).save();

    return res.status(200).json({
      success: true,
      message: "Admin registered",
      newAdmin,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while register admin",
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Please provide all feilds",
      });
    }

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not exist!",
      });
    }

    const isMatch = password === admin.password;

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    res.status(200).json({
      success: true,
      message: "login successfully!",
      admin,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while login admin",
    });
  }
};

//get all teacher
export const getAllTeacher = async (req, res) => {
  try {
    const teachers = await teacherModel.find({});
    return res.status(200).json(teachers);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while get teachers",
    });
  }
};
//get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find({});
    return res.status(200).json(students);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while get teachers",
    });
  }
};

//get all subject
export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await subjectModel.find({});
    return res.status(200).json(subjects);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while get subjects",
    });
  }
};

//get all subject
export const getAllClasses = async (req, res) => {
  try {
    const classes = await classModel.find({});
    return res.status(200).json(classes);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error while get classes",
    });
  }
};
