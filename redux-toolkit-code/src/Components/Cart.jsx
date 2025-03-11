import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector(state => state)
  console.log("items", items);

  const total = items.cart.reduce((a, b) => a + b.price);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.cart.length} (Rs. {total})
      </h3>
    </div>
  );
};

export default Cart;
