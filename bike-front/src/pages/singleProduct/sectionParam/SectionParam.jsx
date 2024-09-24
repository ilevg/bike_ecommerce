import React from "react";
import styles from "./SectionParam.module.scss";
import { useContext } from "react";
import classNames from "classnames";
import { SingleProductContext } from "../../../context/index";

const SectionParam = () => {
  const [singleProduct, setSingleProduct] = useContext(SingleProductContext);

  const attributes = singleProduct && singleProduct.attributes;
  const description =
    singleProduct.description &&
    singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className={styles.param}>
      <h2 className={styles.subtitle}>DESCRIPTIOPN</h2>
      <span className={styles.desc}>{description}</span>
      <h2 className={styles.subtitle}>PARAMETRS</h2>
      {attributes &&
        attributes.map((attribute, index) => (
          <div
            key={index}
            className={classNames(
              styles.attribute,
              index % 2 ? styles.attributeBg : ""
            )}
          >
            <span>{attribute.name}</span>
            <span className={styles.attributeDesc}>{attribute.options[0]}</span>
          </div>
        ))}
    </div>
  );
};

export default SectionParam;
