import React from "react";
import ProductSlider from "../../../../components/productSlider/ProductSlider";
import HomeSectionTitle from "../../ui/homeSectionTitle/HomeSectionTitle";
import styles from "./SectionEuqip.module.scss";
import { useSortProducts } from "../../../../hooks/useSortProducts";

const SectionEuqip = () => {
  const sortProducts = useSortProducts("Equipment", 8);
  return (
    <div className={styles.euqipSection}>
      <div className="container">
        <HomeSectionTitle titleText="euqipments" />
        <ProductSlider productList={sortProducts} />
      </div>
    </div>
  );
};

export default SectionEuqip;
