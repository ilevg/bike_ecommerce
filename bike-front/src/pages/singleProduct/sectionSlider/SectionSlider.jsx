import React, { useContext, useEffect, useState } from "react";
import ProductSlider from "../../../components/productSlider/ProductSlider";
import styles from "./SectionSlider.module.scss";
import { sortArrByDateDesc } from "../../../helpers/sortArr";
import { ListproductsContext } from "../../../context";

const SectionSlider = () => {
  const [products] = useContext(ListproductsContext);
  const [sortProducts, setSortProducts] = useState([]);

  useEffect(() => {
    setSortProducts(products.slice(0, 8).sort(sortArrByDateDesc))
  }, [products])

  
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
