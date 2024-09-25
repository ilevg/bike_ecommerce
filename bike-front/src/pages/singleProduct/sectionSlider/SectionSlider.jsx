import React from "react";
import ProductSlider from "../../../components/productSlider/ProductSlider";
import { productsSort } from "../helpers/productsSort";
import styles from "./SectionSlider.module.scss";

const SectionSlider = () => {
  return (
    <div className={styles.slider}>
      <div className="container">
        <h2 className={styles.subtitle}>new releases</h2>
        <div className={styles.sliderWrapper}>
          <ProductSlider productList={productsSort} />
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
