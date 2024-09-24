import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PriceRangeSlider from "../../../../components/priceRangeSlider/PriceRangeSlider";
import { FilterContext } from "../../../../context";
import styles from "./FilterDropdown.module.scss";

const FilterDropdownField = ({ renderChildren }) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const { filterValues, updateFilter } = useContext(FilterContext);
  const [category] = useState(renderChildren.title);
  const { pathname } = useLocation();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedFilterValues = Object.assign({}, filterValues);
    if (checked) {
      updatedFilterValues[category].push(name);
    } else {
      updatedFilterValues[category] = updatedFilterValues[category].filter(
        (value) => value !== name
      );
    }

    updateFilter(category, updatedFilterValues[category]);
  };

  const dropdownToggle = () => {
    setIsOpenState(!isOpenState);
  };

  useEffect(() => {
    setIsOpenState(false);
  }, [pathname]);

  const arrowIcon = isOpenState ? "ᐱ" : "ᐯ";
  const openClassToggle = isOpenState
    ? `${styles.dropdownItems} ${styles.dropdownItemsOpen}`
    : `${styles.dropdownItems} ${styles.dropdownItemsClose}`;

  return (
    <ul key={renderChildren.title} className={styles.dropdown}>
      <ul className={styles.title} onClick={dropdownToggle}>
        <li>{renderChildren.title}</li>
        <li className={styles.navMobArrows}>{arrowIcon}</li>
      </ul>

      {
        <ul key={renderChildren.title} className={openClassToggle}>
          {renderChildren.value.map((child) => {
            return child.value && child.value ? (
              <li className={styles.item} key={child.value}>
                <div className={styles.titleCont}>
                  <input
                    className={styles.input}
                    type="checkbox"
                    name={child.value}
                    id={child.value}
                    checked={filterValues[category].includes(
                      child.value ? child.value : child
                    )}
                    onChange={handleCheckboxChange}
                  />

                  <span>{child.value}</span>
                </div>
                <span>({child.count})</span>
              </li>
            ) : typeof +child === "number" ? (
              <div key={child}>
                <PriceRangeSlider
                  minPrice={0}
                  maxPrice={child < 0 ? 0 : child}
                />
              </div>
            ) : (
              <li className={styles.titleCont} key={child}>
                <input
                  className={styles.input}
                  type="checkbox"
                  name={child}
                  id={child}
                  checked={filterValues[category].includes(
                    child.value ? child.value : child
                  )}
                  onChange={handleCheckboxChange}
                />
                <span>{child}</span>
              </li>
            );
          })}
        </ul>
      }
    </ul>
  );
};
export default FilterDropdownField;
