import React, { useContext, useEffect, useState } from "react";
import LinkTag from "../../UI/linkTag/LinkTag";
import SectionMain from "./sectionMain/SectionMain";
import styles from "./SingleProduct.module.scss";
import SectionSlider from "./sectionSlider/SectionSlider";
import { findItemBySlug } from "../../helpers/itemBySlug";
import { useParams } from "react-router-dom";
import { ListproductsContext, SingleProductContext } from "../../context/index";
import SectionParam from "./sectionParam/SectionParam";
import classNames from "classnames";

const SingleProduct = () => {
  const [products] = useContext(ListproductsContext);
  const [productsList, setProductsList] = useState([])
  const [singleProduct, setSingleProduct] = useContext(SingleProductContext);
  const { slug } = useParams();

  useEffect(() => {
    setProductsList(products)
  }, [products])

  
  const productCategoryName =
  singleProduct && singleProduct.categories && singleProduct.categories[0]?.name;
  const productCategorySlug =
  singleProduct && singleProduct.categories && singleProduct.categories[0]?.slug;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await findItemBySlug({ slug }, productsList);
        setSingleProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };
    fetchProduct();
  }, [slug, setSingleProduct, productsList]);

  return (
    <div className={classNames("container", styles.product)}>
      <div className={styles.productHeaderLinks}>
        <LinkTag to="/" text="Home / " color="black" />
        {productCategorySlug && (
          <LinkTag to={`/${productCategorySlug}`} text={`${productCategoryName} / `} color="black" />
        )}
        <span className={styles.productName}>
          {singleProduct && singleProduct.name}
        </span>
      </div>
      <SectionMain />
      <SectionParam />
      <SectionSlider />
    </div>
  );
};

export default SingleProduct;
