import React from "react";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/bicycles.png";
import styles from "./NotFound.module.scss";
import classNames from "classnames";

const NotFound = () => {
  return (
    <div>
      <PagesTitle img={titleBgImage} pageName="404" />
      <div className={classNames(styles.notFound, "container")}>
        <h1>404</h1>
        <span>Page not found, try again...</span>
      </div>
    </div>
  );
};

export default NotFound;
