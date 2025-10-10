import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div>
        <img src={assets.contact_img} alt="" />
      </div>
    </div>
  );
};

export default Contact;
