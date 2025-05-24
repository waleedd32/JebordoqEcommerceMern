import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  console.log(products);

  return (
    <div>
      <div>
        <Title text1="LATEST" text2="COLLECTIONS" />
      </div>
    </div>
  );
};

export default LatestCollection;
