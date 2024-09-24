import React from "react";
import styles from "./InfoCard.module.scss";

const InfoCard = ({ item, bgColor }) => {
  return (
    <div className={`${styles.infoCard} ${bgColor ? styles.bgCaramel : ""}`}>
      <div className={styles.infoCardTitleWrapp}>
        <span className={styles.infoCardTitle}>{item.title}</span>
        <img
          className={styles.infoCardIcon}
          src={item.imgUrl}
          alt="Equipment"
        />
      </div>
      <span className={styles.infoCardDesc}>{item.desc}</span>
    </div>
  );
};

export default InfoCard;
