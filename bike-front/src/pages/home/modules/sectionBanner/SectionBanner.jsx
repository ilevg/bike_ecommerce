import React from "react";
import { Link } from "react-router-dom";
import styles from "./SectionBanner.module.scss";

const SectionBanner = () => {
  return (
    <div className="container">
      <div className={styles.bannerBg}></div>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>ELECTRIC BICYCLES</h1>
        <p className={styles.bannerDesc}>
          The Cento10 Hybrid is a racing bike with an electric pedal assist that
          sets a new, very high standard for this category.
        </p>
        <Link
          className={styles.link}
          to="http://localhost:3000/blog/super-italian-bike"
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default SectionBanner;
