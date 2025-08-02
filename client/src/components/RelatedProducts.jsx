import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  console.log("related products", products);
  console.log("related category", category);

  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
