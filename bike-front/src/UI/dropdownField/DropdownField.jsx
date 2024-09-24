import React, { useState } from "react";
import styles from "./DropdownField.module.scss";

const DropdownField = ({ navLinks, renderChildren, closeMenuToogle }) => {
  const [isOpenState, setIsOpenState] = useState({});

  const dropdownToggle = (index) => {
    setIsOpenState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderSubcategory = (link, index) => {
    const { title, children } = link;
    const arrowIcon = isOpenState[index] ? "ᐱ" : "ᐯ";
    const subcategoryActiveClassToggle = isOpenState[index]
      ? `${styles.navMobSubcategory} ${styles.subcategoryActive}`
      : styles.navMobSubcategory;
    const navMobOpenClassToggle = isOpenState[index]
      ? `${styles.navMobLinks}`
      : `${styles.navMobLinks} ${styles.navMobClose}`;
    const renderNavLinkSubcategory =
      children && children.length > 0
        ? renderChildren(children)
        : renderChildren();

    return (
      <li className={styles.navMobItem} key={index}>
        <ul
          className={subcategoryActiveClassToggle}
          onClick={() => dropdownToggle(index)}
          key={index}
        >
          <li>{title}</li>
          <li className={styles.navMobArrows}>{arrowIcon}</li>
        </ul>
        {
          <ul
            onClick={() => closeMenuToogle()}
            className={navMobOpenClassToggle}
          >
            {renderNavLinkSubcategory}
          </ul>
        }
      </li>
    );
  };
  return (
    <div>
      <ul className={styles.navMob}>{navLinks.map(renderSubcategory)}</ul>
    </div>
  );
};
export default DropdownField;
