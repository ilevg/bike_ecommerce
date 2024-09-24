import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkTag.module.scss";

const LinkTag = ({ to, text, color }) => {
  const linkClasses = classNames(styles.link, {
    [styles.black]: color === "black",
    [styles.white]: color === "white",
    [styles.gray]: color === "gray",
  });

  return (
    <Link className={linkClasses} to={to}>
      {text}
    </Link>
  );
};

export default LinkTag;
