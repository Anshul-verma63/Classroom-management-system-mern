import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnection.js";
dotenv.config();
import adminRoutes from "./routes/adminRoute.js";
import studentRoute from "./routes/studentRoute.js";
import teacherRoute from "./routes/teacherRoute.js";

//create instance
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "i am server",
  });
});
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/student", studentRoute);
app.use("/api/v1/teacher", teacherRoute);

//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//database connection
dbConnect();
