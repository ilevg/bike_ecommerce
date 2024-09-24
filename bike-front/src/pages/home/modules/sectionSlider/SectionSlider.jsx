import React from "react";
import ProductSlider from "../../../../components/productSlider/ProductSlider";
import { useSortProducts } from "../../../../hooks/useSortProducts";
import HomeSectionTitle from "../../ui/homeSectionTitle/HomeSectionTitle";
import styles from "./SectionSlider.module.scss";

const SectionSlider = () => {
  const sortProducts = useSortProducts("Bicycles", 8);

  return (
    <div className={styles.slider}>
      <div className="container">
        <HomeSectionTitle titleText="new releases" />
        <div className={styles.sliderWrapper}>
          <ProductSlider productList={sortProducts} />
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
