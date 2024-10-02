import React from "react";
import styles from "./Cart.module.scss";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import LinkTag from "../../UI/linkTag/LinkTag";
import classNames from "classnames";
import ProductSlider from "../../components/productSlider/ProductSlider";
import { Link } from "react-router-dom";
import { useSortProducts } from "../../hooks/useSortProducts";
import { useContext } from "react";
import { CartContext } from "../../context";
import CartItem from "./components/cartItem/CartItem";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const sortProductsForSlider = useSortProducts("", 8);

  const handleEmptyCart = () => {
    setCart(null);
    localStorage.removeItem("woo-react-cart");
  };

  return (
    <>
      <PagesTitle img={titleBgImage} pageName="Cart" />
      <div className={classNames(styles.cart, "container")}>
        {cart ? (
          <>
            <div className={styles.cartProductCont}>
              <div className={styles.cartEmpty}>
                <LinkTag
                  text="Go back to shopping"
                  to="/trade-in"
                  color="black"
                />
                <button className={styles.cartEmptyBtn} type="button" onClick={handleEmptyCart}>Empty the cart</button>
              </div>
              {cart.products.length &&
                cart.products.map((product) => (
                  <CartItem
                    key={product.id}
                    id={product.id}
                    product={product}
                  />
                ))}
            </div>

            <div className={styles.price}>
              <div className={styles.priceCont}>
                <span className={styles.priceSubtitle}>Order number</span>
                <span>789563678</span>
              </div>

              <div className={styles.priceCont}>
                <div>
                  <span className={styles.priceSubtitle}>Order amount</span>
                  <div className={styles.priceSubtitle}>(without discount)</div>
                </div>
                <span>{cart.totalProductsPrice} $</span>
              </div>

              <div className={styles.priceCont}>
                <span className={styles.priceSubtitle}>Products count</span>
                <span>{cart.totalProductsCount}</span>
              </div>

              <div className={classNames(styles.priceCont, styles.priceTotal)}>
                <span>Total</span>
                <span>{cart.totalProductsPrice} $</span>
              </div>
              <Link className={styles.checkoutLink} to="/checkout">
                Go to Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className={classNames(styles.cartNone, "container")}>
            <p className={styles.cartNoneParagraph}>Cart is Empty</p>
            <LinkTag to="/trade-in" text="Continue shopping" color="gray" />
          </div>
        )}
      </div>

      <div className={classNames("container", styles.sliderCont)}>
        <h2 className={styles.sliderTitle}>Other Products</h2>
        <ProductSlider productList={sortProductsForSlider} />
      </div>
    </>
  );
};
export default Cart;
