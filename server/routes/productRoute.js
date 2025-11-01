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
      const {
        name,
        description,
        price,
        category,
        subCategory,
        sizes,
        bestseller,
      } = req.body;

      const image1 = req.files.image1 && req.files.image1[0];
      const image2 = req.files.image2 && req.files.image2[0];
      const image3 = req.files.image3 && req.files.image3[0];
      const image4 = req.files.image4 && req.files.image4[0];
      console.log(
        "body: ",
        name,
        description,
        price,
        category,
        subCategory,
        sizes,
        bestseller
      );

      console.log(
        "image1: ",
        image1,
        "image2: ",
        image2,
        "image3: ",
        image3,
        "image4. ",
        image4
      );
      res.json({ success: true, message: "Product Added" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  }
);
export default productRouter;
