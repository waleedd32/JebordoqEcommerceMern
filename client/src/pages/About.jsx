import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was founded with a vision to transform the online shopping
            experience through innovation and customer-centered design. Our
            journey began with a straightforward purpose: to create a platform
            where customers can explore, discover, and purchase a wide range of
            products from the convenience of their homes.
          </p>
          <p>
            From the start, we’ve been committed to building a diverse and
            carefully curated selection of high-quality products that suit every
            style and preference. Whether it's fashion, beauty, home essentials,
            or electronics, we source our collection from trusted brands and
            suppliers to meet our customers' needs.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to empower our customers by offering them
            choice, ease, and confidence. We strive to deliver a seamless
            shopping experience that exceeds expectations at every step—from
            browsing to purchasing and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
