import React, { useState, useEffect } from "react";
import styles from "./Select.module.scss";

const Select = ({ callback, pathname }) => {
  const [selectedValue, setSelectedValue] = useState("new");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    callback(value);
  };
  useEffect(() => {
    setSelectedValue("new");
  }, [pathname]);

  return (
    <select
      className={styles.select}
      name="sort"
      id="sort"
      value={selectedValue}
      onChange={handleSelectChange}
    >
      <option className={styles.option} value="new">
        New products
      </option>
      <option className={styles.option} value="descPrice">
        Price: descending
      </option>
      <option className={styles.option} value="ascPrice">
        Price: ascending
      </option>
    </select>
  );
};

export default Select;
