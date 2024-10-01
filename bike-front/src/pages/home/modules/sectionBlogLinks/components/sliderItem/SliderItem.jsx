import React from "react";
import { Link } from "react-router-dom";
import styles from "./SliderItem.module.scss";

const SliderItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <span className={styles.itemDesc}>{item.title.rendered}</span>
      <Link
        to={`https://bike-ecommerce-front.vercel.app/blog/${item.slug}`}
        className={styles.itemLink}
      >
        Read more
      </Link>
    </div>
  );
};

export default SliderItem;
