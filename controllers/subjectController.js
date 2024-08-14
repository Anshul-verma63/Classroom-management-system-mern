import subjectModel from "../models/subjectModel.js";

export const addSubject = async (req, res) => {
  try {
    const { subName } = req.body;
    const subject = await subjectModel.findOne({ subName });
    if (subject) {
      return res.status(404).send({
        success: false,
        message: "Subject already exist!",
      });
    }

    const newSubject = await new subjectModel(req.body).save();
    return res.status(200).send({
      success: true,
      message: "Subject created!",
      newSubject,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while add subject",
    });
  }
};
