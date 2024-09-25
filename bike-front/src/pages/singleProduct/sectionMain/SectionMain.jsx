import styles from "./SectionMain.module.scss";
import SingleProductImgSlider from "../../../components/singleProductImgSlider/SingleProductImgSlider";
import { useContext } from "react";
import classNames from "classnames";
import { SingleProductContext } from "../../../context/index";
import AddToCartBtn from "../compoments/AddToCartBtn";

const SectionMain = () => {
  const [singleProduct] = useContext(SingleProductContext);
  const productImages = singleProduct && singleProduct.images;

  const productAttributes = singleProduct && singleProduct.attributes;
  const findAttribute = (attrName) => {
    const pro =
      productAttributes &&
      productAttributes.filter((attr) => attr["name"] === attrName);
    const attribute = pro && pro[0].options[0];
    return attribute;
  };

  const article = findAttribute("Article number");
  const brand = findAttribute("Brand");
  const description =
    singleProduct.description &&
    singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "");
  const truncDesc =
    description && description.length > 50
      ? `${description.substring(0, 150)}...`
      : description;
  const stockStatus = singleProduct.stock_status;
  const handleStockStatus = stockStatus === "instock" ? "In stock" : "Sold out";
  const handleBtnDisable = stockStatus === "instock" ? false : true;

  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        <SingleProductImgSlider productImages={productImages} />
      </div>
      {singleProduct && (
        <div className={styles.info}>
          <h2 className={styles.name}>{singleProduct.name}</h2>
          <span className={styles.brand}>{brand}</span>
          <span className={styles.article}>Article number: {article}</span>
          <span
            className={classNames(
              styles.stock,
              singleProduct.stock_status === "instock"
                ? styles.stockGreen
                : styles.stockRed
            )}
          >
            {handleStockStatus}
          </span>

          <span className={styles.cardPrice}>
            {`${singleProduct.price} $`}
            {singleProduct.price < singleProduct.regular_price && (
              <span
                className={styles.cardPriceReg}
              >{`${singleProduct.regular_price} $`}</span>
            )}
          </span>

          <span className={styles.desc}>{truncDesc}</span>

          <div className={styles.productButtons}>
            <div className={styles.productQuantityCont}>
              <span className={styles.productDecr}>-</span>
              <span className={styles.productQuantity}>0</span>
              <span className={styles.productIncr}>+</span>
            </div>
            <div>
              <AddToCartBtn
                product={singleProduct}
                disabled={handleBtnDisable}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionMain;
