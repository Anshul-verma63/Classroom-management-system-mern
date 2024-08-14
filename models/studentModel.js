import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: String,
    default: "student",
  },
  sclassName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
});

export default mongoose.model("student", studentSchema);
