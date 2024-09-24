import React from "react";
import styles from "./DeliveryPay.module.scss";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import BrandCarousel from "../../UI/brandCarousel/BrandCarousel";
import classNames from "classnames";
import SectionTitle from "../../UI/sectionTitle/SectionTitle";
import DropdownField from "../../UI/dropdownField/DropdownField";

import { deliveryInfo, payInfo } from "./data";

const renderPayInfo = (subcategories) =>
  subcategories &&
  subcategories.map((subcategory) => (
    <li key={subcategory}>
      <span>{subcategory}</span>
    </li>
  ));

const renderDeliveryInfo = (subcategories) =>
  subcategories &&
  subcategories.map((subcategory) => (
    <li key={subcategory}>
      <span>{subcategory}</span>
    </li>
  ));

const DeliveryPay = () => {
  return (
    <>
      <PagesTitle img={titleBgImage} pageName="Delivery and Pay" />
      <div className={classNames(styles.deliveryPay, "container")}>
        <div className={styles.deliveryPayTitle}>
          <SectionTitle titleText="Shipping Information" />
        </div>

        <div className={styles.deliveryPayDesc}>
          <p>
            For the convenience of customers, there are several ways to deliver
            goods. There is delivery in Moscow and Moscow region, delivery to
            the regions of Russia and pickup. Any of the methods is available
            when placing an order through the website or from the operators.
          </p>
          <p>
            Bicycles and bicycle machines are delivered assembled and
            configured.
          </p>
          <span>
            The operator will answer any questions about the rules and the cost
            of delivery: <a href="+14950557586"> +1(495)055-75-86</a>
          </span>
        </div>

        <DropdownField navLinks={payInfo} renderChildren={renderPayInfo} />
        <div className={styles.deliveryPayTitle}>
          <SectionTitle titleText="Pay Information" />
        </div>
        <div className={styles.deliveryPayDesc}>
          <p>
            For the convenience of customers, there are several ways to repay.
            Below, you can read the details and choose the most appropriate one.
            Any of the methods is available when placing an order through the
            shopping cart or operators.
          </p>
        </div>

        <DropdownField
          navLinks={deliveryInfo}
          renderChildren={renderDeliveryInfo}
        />
      </div>
      <BrandCarousel />
    </>
  );
};

export default DeliveryPay;
