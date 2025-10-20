import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// App Config
const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
