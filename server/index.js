import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

const app = express();
app.use(cors());

// dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

connectCloudinary();

// middlewares
app.use(express.json());

// api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
