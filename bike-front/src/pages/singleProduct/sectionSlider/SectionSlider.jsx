import React, { useEffect, useState } from "react";
import ProductSlider from "../../../components/productSlider/ProductSlider";
import { productsSort } from "../helpers/productsSort";
import styles from "./SectionSlider.module.scss";

const SectionSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sortedProducts = await productsSort();
      setProducts(sortedProducts);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.slider}>
      <div className="container">
        <h2 className={styles.subtitle}>new releases</h2>
        <div className={styles.sliderWrapper}>
          <ProductSlider productList={products} />
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
