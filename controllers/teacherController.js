import teacherModel from "../models/teacherModel.js";
import studentModel from "../models/studentModel.js";

//teacher login
export const teacherLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Please provide all feilds",
      });
    }

    const teacher = await teacherModel.findOne({ email });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Admin not exist!",
      });
    }

    const isMatch = password === teacher.password;

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    res.status(200).json({
      success: true,
      message: "login successfully!",
      teacher,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while teacher login",
    });
  }
};
export const addteacher = async (req, res) => {
  try {
    const { email } = req.body;
    const teacher = await teacherModel.findOne({ email });
    if (teacher) {
      return res.status(404).send({
        success: false,
        message: "Teacher already exist!",
      });
    }

    const newTeacher = await new teacherModel(req.body).save();
    return res.status(200).send({
      success: true,
      message: "Teacher created!",
      newTeacher,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while add teacher",
    });
  }
};

//update teacher
export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    const teacher = await teacherModel.findOne({ _id: id });
    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not exist!",
      });
    }

    const updated = await teacherModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    await updated.save();

    return res.status(200).send({
      success: true,
      message: "Teacher Updated!",
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while update teacher",
    });
  }
};
//delete teacher
export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    await teacherModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({
      success: true,
      message: "Teacher Deleted!",
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while update teacher",
    });
  }
};

//get teacher details
export const getTeacherDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await teacherModel.findOne({ _id: id });
    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while get teacher detail",
    });
  }
};

// get student of class
export const getStudentByClass = async (req, res) => {
  try {
    const students = await studentModel.find({ _id: req.params.id });
    return res.status(200).json(students);
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while get student detail",
    });
  }
};
