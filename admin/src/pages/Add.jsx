import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form>
      <div>
        <p>Upload Image</p>

        <div>
          <label htmlFor="image1">
            <img className="w-20" alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
    </form>
  );
};

export default Add;
