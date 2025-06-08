import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      {" "}
      <div>
        <div>
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p>Copyright 2024@ forever.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
