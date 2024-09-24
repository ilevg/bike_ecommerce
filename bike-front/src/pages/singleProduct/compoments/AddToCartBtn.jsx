import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context";
import Button from "../../../UI/button/Button";
import {
  addFirstProductToCart,
  updatedCart,
} from "../../../helpers/CartHelpers";

const AddToCartBtn = ({ product, disabled }) => {
  const [cart, setCart] = useContext(CartContext);
  let existingCart = localStorage.getItem("woo-react-cart");

  const handleAddToCartClick = () => {
    if (existingCart) {
      existingCart = JSON.parse(existingCart);
      const qtyToBeAdded = 1;
      const updateCart = updatedCart(existingCart, product, qtyToBeAdded);
      setCart(updateCart);
    } else {
      const newCart = addFirstProductToCart(product);
      setCart(newCart);
    }
  };

  return (
    <div>
      <Button
        onClick={handleAddToCartClick}
        width="180px"
        text="To cart"
        disabled={disabled}
      />
    </div>
  );
};

export default AddToCartBtn;
