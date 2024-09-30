import { useContext } from "react";
import { ListproductsContext } from "../context";
import { sortArrByDateDesc } from "../helpers/sortArr";

export const useSortProducts = (categoryName, sliceNumbers) => {
  const [products, setProducts] = useContext(ListproductsContext);
  !products && console.log(setProducts);
  if (!Array.isArray(products) || products.length === 0) {
    console.warn("No products available yet:", products);
    return [];
  }
  const newListEquip = [];
  if (categoryName) {
    products.forEach((product) => {
      if (product.categories?.[0]?.name === categoryName) {
        newListEquip.push(product);
      }
    });
  } else {
    newListEquip.push(...products);
  }
  const sortEquipList = newListEquip
    .slice(0, +sliceNumbers)
    .sort(sortArrByDateDesc);
  return sortEquipList;
};
