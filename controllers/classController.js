import classModel from "../models/classModel.js";

export const createClass = async (req, res) => {
  try {
    const { cname } = req.body;
    console.log(req.body);

    const findClass = await classModel.findOne({ cname });

    if (findClass) {
      return res.status(404).json({
        success: false,
        message: "This class name already present!",
      });
    }

    const newClass = await new classModel(req.body).save();

    return res.status(200).send({
      success: true,
      message: "Class created!",
      newClass,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while create class",
    });
  }
};
