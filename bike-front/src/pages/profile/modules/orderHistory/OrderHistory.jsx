import React from "react";
import styles from "./OrderHistory.module.scss";
import bikeImg from "../../../../assets/img/delete/image68.png";
import { useState } from "react";

const OrderHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const productInfoOpen = () => {
    setIsOpen(!isOpen);
  };
  const arrowIcon = isOpen ? "ᐱ" : "ᐯ";

  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>order history</h3>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span>Date</span>
          <span>Order Number</span>
          <span>Order Price</span>
          <span className={styles.orderStatus}>Status</span>
        </div>
        <div className={styles.productCont} onClick={productInfoOpen}>
          <span>01.01.0001</span>
          <span>0000000000</span>
          <span>0 000 $</span>
          <span className={styles.orderStatus}>No oders</span>
          <span>{arrowIcon}</span>
        </div>
        <div
          colSpan={5}
          className={isOpen ? styles.productOpen : styles.productClose}
        >
          <div>
            <div className={styles.product}>
              <img className={styles.img} src={bikeImg} alt="qweeqw" />
              <span className={styles.productName}>Bicycle Name</span>

              <div className={styles.productPrice}>
                <span>0 000 $</span>
                <div className={styles.productOldPrice}>0 000 $</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderHistory;
