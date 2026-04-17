import express from "express";

import authUser from "../middleware/auth.js";
import userModel from "../models/userModel.js";

const cartRouter = express.Router();

// add products to user cart
cartRouter.post("/add", authUser, async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

export default cartRouter;
