import express from "express";
import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

const createToken = (id) => {
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking if the user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Assuming createToken is a function for generating JWT tokens
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

export default userRouter;
