import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      console.log("tempData:", tempData);
    }
  }, [cartItems, products]);
  return <div>Cart</div>;
};

export default Cart;
