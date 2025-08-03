import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      console.log("Filtered related products:", productsCopy.slice(0, 5));
    }
  }, [products]);

  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
