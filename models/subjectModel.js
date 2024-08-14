import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subName: {
      type: String,
      required: [true, "subname is required!"],
      unique: [true, "subName is already present!"],
    },
    subCode: {
      type: String,
      required: [true, "subcode is required!"],
    },
    sclassName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: [true, "sclassname is required!"],
    },
    teacherName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },
  },
  { timestamps: true }
);

export default mongoose.model("subject", subjectSchema);
