import React from "react";
import styles from "./Storage.module.scss";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import BrandCarousel from "../../UI/brandCarousel/BrandCarousel";
import classNames from "classnames";

const Storage = () => {
  return (
    <>
      <PagesTitle img={titleBgImage} pageName="Bike Storage" />
      <div className={classNames(styles.storage, "container")}>
        <p>
          If you like to ride, you can park your bike in the apartment for the
          winter or take it to us for storage and maintenance. The typical
          storage of a bicycle in winter for most people not only takes up space
          in the corridors in attics and balconies, but also pretty much spoils
          the bike and its aggregates. Storing a bicycle in an apartment often
          turns into a big problem. And we appreciate you, dear customers, and
          offer to solve this problem.
        </p>
        <div className={styles.storageItems}>
          <div className={styles.storageItem}>
            <span className={styles.storageText}>
              Bike storage for 6 months from October to April is only $300
            </span>
            <span>
              Comprehensive bike maintenance as a gift (instead of $200)
            </span>
          </div>
          <div className={styles.storageItemSec}>
            Your bike will be stored in a warm and dry place for the entire
            storage period. Before packing, the bike is inspected and lubricated
            for canning, and when it is given to you, comprehensive maintenance
            is carried out.
          </div>
        </div>
      </div>
      <BrandCarousel />
    </>
  );
};

export default Storage;
