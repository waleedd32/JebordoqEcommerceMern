import express from "express";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add",

  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      res.json({ success: true, message: "Product Added" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  }
);
export default productRouter;
