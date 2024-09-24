import React from "react";
import SectionTitle from "../../../../UI/sectionTitle/SectionTitle";
import styles from "./HomeSectionTitle.module.scss";

const HomeSectionTitle = ({ titleText }) => {
  return (
    <div className={styles.homeSectionTitle}>
      <SectionTitle titleText={titleText} />
    </div>
  );
};

export default HomeSectionTitle;
