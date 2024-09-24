import React from "react";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ titleText }) => {
  return <h2 className={styles.sectionTitle}>{titleText}</h2>;
};

export default SectionTitle;
