import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import ProductCard from "../../components/productCard/ProductCard";
import Select from "../../components/select/Select";
import FilterDropdownField from "./components/filterDropdown/FilterDropdown";
import styles from "./Catalog.module.scss";
import classNames from "classnames";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import { ListproductsContext } from "../../context";
import { itemsForFilterField } from "./data";
import {
  sortArrByPriceAsc,
  sortArrByPriceDesc,
  sortArrByDateDesc,
} from "../../helpers/sortArr";
import { FilterContext } from "../../context";
import { useCallback } from "react";

const PAGE_SIZE = 12;

const Catalog = () => {
  const [catalogType, setCatalogType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownField, setDropdownField] = useState([]);
  const [products] = useContext(ListproductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState("500");
  const { filterValues, updateFilter } = useContext(FilterContext);
  const { pathname } = useLocation();
  const { setFilterValues } = useContext(FilterContext);
  const defaultFilterValues = useContext(FilterContext).defaultFilterValues;
  const filterValueInStock = filterValues["Only in stock"];

  const getCatalogTypeFormated = useCallback(
    () => pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2),
    [pathname]
  );

  const filterAllFunc = useCallback(() => {
    const catalogTypeFormated = getCatalogTypeFormated();
    let productsCopy = [...products];
    setCatalogType(catalogTypeFormated);

    if (catalogTypeFormated !== "Trade-in") {
      productsCopy = productsCopy.filter(
        (product) => product.categories[0]?.name === catalogTypeFormated
      );
    }

    const allPrices = productsCopy.map((product) => product.price);
    setMaxPrice(Math.max(...allPrices));

    let filteredProds = [...productsCopy];
    const switchFilterFunc = (key, values) => {
      let copyProds = [];

      if (key === "Price" && +values[1] > 0) {
        if (copyProds.length) {
          filteredProds = copyProds.filter(
            (product) =>
              product.price >= values[0] && product.price <= values[1]
          );
        } else {
          filteredProds = filteredProds.filter(
            (product) =>
              product.price >= values[0] && product.price <= values[1]
          );
        }
      }

      values.length &&
        values.forEach((value) => {
          filteredProds.forEach((product) => {
            const productAttribute =
              product.attributes
                ?.find((attr) => attr.name === key)
                ?.options?.[0]?.includes(value) || null;

            productAttribute && copyProds.push(product);
          });
        });

      if (copyProds.length) filteredProds = copyProds;
      if (filterValueInStock) {
        filteredProds = filteredProds.filter(
          (product) => product["stock_status"] === "instock"
        );
      }
    };
    for (const [key, values] of Object.entries(filterValues)) {
      switchFilterFunc(key, values);
    }
    setFilteredProducts(filteredProds);
  }, [products, filterValues, filterValueInStock, getCatalogTypeFormated]);

  useEffect(() => {
    filterAllFunc();
  }, [filterValueInStock, filterAllFunc]);

  const onChangeInstockInput = () => {
    updateFilter("Only in stock", !filterValueInStock);
  };

  const onChangeSortingProducts = (optionValue) => {
    let sortFunction;
    switch (optionValue) {
      case "descPrice":
        sortFunction = sortArrByPriceAsc;
        break;
      case "ascPrice":
        sortFunction = sortArrByPriceDesc;
        break;
      default:
        sortFunction = sortArrByDateDesc;
        break;
    }
    setFilteredProducts([...filteredProducts].sort(sortFunction));
  };

  useEffect(() => {
    const fetchDropdownField = async () => {
      const itemsList = await itemsForFilterField(filteredProducts, maxPrice);
      setDropdownField(itemsList);
    };
    fetchDropdownField();
  }, [catalogType, filteredProducts, maxPrice]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname, products, filterValueInStock]);

  useEffect(() => {
    setFilterValues(defaultFilterValues);
  }, [pathname, products, setFilterValues, defaultFilterValues]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagesLength = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <PagesTitle img={titleBgImage} pageName={catalogType} />
      <div className="container">
        <div className={styles.catalogSort}>
          <div className={styles.catalogStock}>
            <span>Only in stock</span>
            <input
              className={styles.catalogInput}
              type="checkbox"
              name="stock"
              id="stock"
              checked={filterValueInStock}
              onChange={onChangeInstockInput}
            />
          </div>
          <Select callback={onChangeSortingProducts} pathname={pathname} />
        </div>

        <div className={styles.catalog}>
          <div className={styles.catalogFilters}>
            {dropdownField.length &&
              dropdownField.map((item, index) => (
                <FilterDropdownField key={index} renderChildren={item} />
              ))}
          </div>

          <div className={styles.catalogProductsCont}>
            {currentProducts.map((product) => (
              <div key={product.id} className={styles.catalogProduct}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.paginBtnArrow}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ≪
          </button>
          {Array.from({ length: pagesLength }, (_, index) => (
            <button
              className={classNames(
                styles.paginBtn,
                currentPage === index + 1 && styles.activePage
              )}
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={styles.paginBtnArrow}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagesLength}
          >
            ≫
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
