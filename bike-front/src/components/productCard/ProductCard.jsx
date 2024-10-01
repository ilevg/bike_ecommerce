import React from "react";
import Button from "../../UI/button/Button";
import styles from "./ProductCard.module.scss";
import click from "../../assets/img/click.png";
import { Link } from "react-router-dom";
import classNames from "classnames";

const ProductCard = ({ product }) => {
  const productImg = product && product.images[0]?.src;

  const countryAttr = product && product.attributes.find(
    (attr) => attr.name.toLowerCase() === "country"
  );
  const productCountry = countryAttr && countryAttr.options[0].toLowerCase();
  const stockStatus =
    product.stock_status === "instock" ? "In stock" : "Sold out";

  let flagPath = "";
  switch (productCountry) {
    case "usa":
      flagPath = `/assets/flags/usa.png`;
      break;
    case "france":
      flagPath = `/assets/flags/france.png`;
      break;
    case "italy":
      flagPath = `/assets/flags/italy.png`;
      break;
    case "spain":
      flagPath = `/assets/flags/spain.png`;
      break;
    case "switzerland":
      flagPath = `/assets/flags/swiss.png`;
      break;
    default:
      flagPath = `/assets/flags/usa.png`;
      break;
  }

  return (
    <div className={styles.card}>
      <img
        className={`${
          flagPath ? styles.cardFlagImg : styles.cardFlagImgHidden
        }`}
        src={flagPath}
        alt="Country flag"
      />
      <div className={styles.cardImgWrapper}>
        <img
          className={styles.cardProductImg}
          src={productImg}
          alt={product.name}
        />
        <span
          className={classNames(
            styles.cardProductInfo,
            stockStatus === "Sold out" && styles.outOfStock
          )}
        >
          {stockStatus}
        </span>
      </div>
      <div className={styles.cardDesc}>
        <span className={styles.cardDescText}>{product.name}</span>
      </div>

      <span className={styles.cardPrice}>
        {`${product && product.price} $`}
        {product && product.price < product.regular_price && (
          <span
            className={styles.cardPriceReg}
          >{`${product.regular_price} $`}</span>
        )}
      </span>

      <div className={styles.cardBtn}>
        <Link to={`/catalog/${product.slug}`}>
          <Button
            width="100%"
            text="More info"
            imgUrl={click}
            alt="More Info"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
