import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});
const classSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: [true, "cname is required!"],
    unique: [true, "class name must be uniqu!"],
  },
  sessions: [SessionSchema],
});

export default mongoose.model("class", classSchema);
