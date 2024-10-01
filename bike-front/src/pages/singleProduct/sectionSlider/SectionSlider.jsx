import React, { useContext, useState } from "react";
import ProductSlider from "../../../components/productSlider/ProductSlider";
import styles from "./SectionSlider.module.scss";
import { sortArrByDateDesc } from "../../../helpers/sortArr";
import { ListproductsContext } from "../../../context";

const SectionSlider = () => {
  const [sortProducts, setSortProducts] = useState([]);
  const [products] = useContext(ListproductsContext);


  setSortProducts(products.slice(0, 8).sort(sortArrByDateDesc))

  
  return (
    <div className={styles.slider}>
      <div className="container">
        <h2 className={styles.subtitle}>new releases</h2>
        <div className={styles.sliderWrapper}>
          <ProductSlider productList={sortProducts} />
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
