import React, { useContext } from "react";
import styles from "./Checkout.module.scss";
import classNames from "classnames";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import Button from "../../UI/button/Button";
import { sendOrderJson } from "../../services/apiService";
import { CartContext } from "../../context";
import LinkTag from "../../UI/linkTag/LinkTag";
import { useState } from "react";
import { useEffect } from "react";
import SendOrderSuccessModal from "./components/sendOrderSuccessModal/SendOrderSuccessModal";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  !cart && console.log(setCart);
  const [pay, setPay] = useState("stripe");
  const [shiping, setShiping] = useState("deliveryCur");
  const [formError, setFormError] = useState(false);
  const [setOrderError] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [orderData, setOrderData] = useState({
    payment_method: pay,
    set_paid: true,
    billing: {
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      postcode: "",
      email: "",
      phone: "",
    },
    shipping: {
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      postcode: "",
    },
    line_items: [
      {
        product_id: 0,
        quantity: 0,
      },
    ],
  });

  const checkFormField = () => {
    const formFieldValues = [
      orderData.billing.first_name,
      orderData.billing.last_name,
      orderData.billing.email,
      orderData.billing.phone,
    ];
    formFieldValues.forEach((fieldValue) => {
      if (fieldValue.trim().length === 0) {
        return false;
      }
    });
    return true;
  };

  useEffect(() => {
    const productsArr = [];
    cart &&
      cart.products.forEach((product) => {
        productsArr.push({
          product_id: product.id,
          quantity: product.productQty,
        });
      });
    setOrderData((prevData) => ({
      ...prevData,
      line_items: productsArr,
    }));
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;

    setOrderData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  const handlePayChange = (e) => {
    setPay(e.target.id);
  };

  const handleShipingChange = (e) => {
    setShiping(e.target.id);
  };

  const handleConfirmOrder = () => {
    if (checkFormField()) {
      sendOrderJson(orderData).then((response) => {
        if (response.status !== 200) {
          setOrderError(true);
          setFormError(true);
          return;
        } else {
          setOrderNumber(response.data.id);
          setCart(null);
          localStorage.removeItem("woo-react-cart");
        }
      });
    } else {
      setFormError(true);
    }
  };

  return (
    <>
      <PagesTitle img={titleBgImage} pageName="Checkout page" />
      {cart ? (
        <div className={classNames(styles.checkout, "container")}>
          <div className={styles.details}>
            <div className={styles.deliveryDetails}>
              <h3 className={styles.subtitle}>1 Delivery Details</h3>
              <form>
                <div className={styles.inputsCont}>
                  <input
                    className={styles.input}
                    type="text"
                    name="first_name"
                    placeholder="First Name*"
                    data-section="billing"
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.input}
                    type="text"
                    name="last_name"
                    placeholder="Last Name*"
                    data-section="billing"
                    onChange={handleInputChange}
                  />
                </div>

                {shiping === "deliveryCur" && (
                  <div
                    className={classNames(
                      styles.inputsCont,
                      styles.inputsContAddress
                    )}
                  >
                    <input
                      className={styles.input}
                      type="text"
                      name="city"
                      placeholder="City*"
                      data-section="billing"
                      onChange={handleInputChange}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      name="address_1"
                      placeholder="Street*"
                      data-section="billing"
                      onChange={handleInputChange}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      name="address_2"
                      placeholder="Bld.*"
                      data-section="billing"
                      onChange={handleInputChange}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      name="postcode"
                      placeholder="Postal*"
                      data-section="billing"
                      onChange={handleInputChange}
                    />
                  </div>
                )}

                <div className={styles.inputsCont}>
                  <input
                    className={styles.input}
                    type="number"
                    name="phone"
                    placeholder="Phone number*"
                    data-section="billing"
                    onChange={handleInputChange}
                  />
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    data-section="billing"
                    onChange={handleInputChange}
                  />
                </div>
                <textarea
                  className={styles.textarea}
                  name="order_comments"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Order comments"
                  onChange={handleInputChange}
                ></textarea>
              </form>
            </div>

            <div className={styles.payDetails}>
              <h3 className={styles.subtitle}>2 Payment Details</h3>
              <span className={styles.paySubtitle}>Shipping method</span>
              <div>
                <input
                  className={styles.checkbox}
                  type="radio"
                  name="delivery"
                  id="deliveryCur"
                  onClick={handleShipingChange}
                  defaultChecked
                />
                <label className={styles.checkboxLable} htmlFor="deliveryCur">
                  Courier delivery
                </label>
              </div>
              <div>
                <input
                  className={styles.checkbox}
                  type="radio"
                  name="delivery"
                  id="deliveryPickup"
                  onClick={handleShipingChange}
                />
                <label
                  className={styles.checkboxLable}
                  htmlFor="deliveryPickup"
                >
                  Pickup
                </label>
              </div>

              <span className={styles.paySubtitle}>Pay method</span>
              <div>
                <input
                  className={styles.checkbox}
                  type="radio"
                  name="payment"
                  id="stripe"
                  onClick={handlePayChange}
                  defaultChecked
                />
                <label className={styles.checkboxLable} htmlFor="stripe">
                  Credit Card (Stripe)
                </label>
              </div>
              <div>
                <input
                  className={styles.checkbox}
                  type="radio"
                  name="payment"
                  id="cod"
                  onClick={handlePayChange}
                />
                <label className={styles.checkboxLable} htmlFor="cod">
                  Pay on Delivery or Pickup
                </label>
              </div>
            </div>
          </div>

          <div className={styles.orderDetails}>
            <h3 className={styles.subtitle}>3 Your Order</h3>
            <div className={styles.total}>
              <div className={styles.totalPriceCont}>
                <span>
                  Total of {cart.totalProductsCount}{" "}
                  {cart.totalProductsCount > 1 ? "products" : "product"}
                </span>
                <span className={styles.totalPrice}>
                  {cart.totalProductsPrice} $
                </span>
              </div>

              {formError && (
                <p className={styles.formError}>
                  Please fill in all the fields in the form
                </p>
              )}
              <div className={styles.btn}>
                <Button
                  onClick={handleConfirmOrder}
                  width="100%"
                  text="Confirm the order"
                />
              </div>

              <span className={styles.termsCont}>
                Your personal data will be used to process your orders, simplify
                your work with the site and for other purposes described in our
                <a className={styles.terms} href="/terms">
                  {" "}
                  privacy policy.
                </a>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className={classNames(styles.checkoutNone, "container")}>
          <p className={styles.checkoutNoneParagraph}>No products selected</p>
          <LinkTag to="/trade-in" text="Continue shopping" color="gray" />
        </div>
      )}
      {orderNumber && (
        <SendOrderSuccessModal
          orderNumb={orderNumber}
          setOrderNumber={setOrderNumber}
        />
      )}
    </>
  );
};

export default Cart;
