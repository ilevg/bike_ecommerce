import React from "react";
import styles from "./CloseBtn.module.scss";

const CloseBtn = ({ onClickFunc }) => {
  return (
    <div className={styles.closeBtn} onClick={(e) => onClickFunc(e)}></div>
  );
};

export default CloseBtn;
