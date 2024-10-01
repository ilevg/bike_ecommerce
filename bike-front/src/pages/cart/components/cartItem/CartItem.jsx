import React, { useContext, useState } from "react";
import { CartContext } from "../../../../context";
import {
  removeItemFromCart,
  updatedCart,
} from "../../../../helpers/CartHelpers";
import CloseBtn from "../../../../UI/closeBtn/CloseBtn";
import styles from "./CartItem.module.scss";

const CartItem = ({ product, id }) => {
  const [setCart] = useContext(CartContext);

  const [productCount, setProductCount] = useState(product.productQty);

  const handleQtyChange = (e) => {
    const newQty = e.target.value;
    setProductCount(newQty);

    let existingCart = localStorage.getItem("woo-react-cart");
    existingCart = JSON.parse(existingCart);

    const updateCart = updatedCart(existingCart, product, false, newQty);
    setCart(updateCart);
  };

  const handleRemoveProductClick = (e) => {
    const updateCart = removeItemFromCart(id);
    setCart(updateCart);
  };

  return (
    <div key={product.productId} className={styles.cartProduct}>
      <div className={styles.productNameCont}>
        <img
          className={styles.productImg}
          src={product.productImg}
          alt="qweeqw"
        />
        <span className={styles.cartProductName}>{product.productName}</span>
      </div>
      <div className={styles.productPriceCont}>
        <input
          className={styles.productQuantity}
          type="number"
          min="1"
          name="productCount"
          id="productCount"
          value={productCount}
          onChange={handleQtyChange}
        />
        <div className={styles.cartProductPrice}>
          <span>{product.productPrice}</span>
          <div className={styles.productOldPrice}>
            {product.productOldPrice} $
          </div>
        </div>
      </div>
      <div className={styles.sidebarIconCont}>
        <CloseBtn onClickFunc={handleRemoveProductClick} />
      </div>
    </div>
  );
};

export default CartItem;
