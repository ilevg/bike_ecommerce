import React from "react";
import LinkTag from "../../UI/linkTag/LinkTag";
import styles from "./PagesTitle.module.scss";

const PagesTitle = ({ img, pageName }) => {
  const bgStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className={styles.pagesTitle} style={bgStyle}>
      <div className="container">
        <div className={styles.pagesTitleWrapp}>
          <LinkTag to="/" text="Home "></LinkTag>
          <span className={styles.page}>/ {pageName}</span>
        </div>

        <h2 className={styles.title}>{pageName}</h2>
      </div>
    </div>
  );
};

export default PagesTitle;
