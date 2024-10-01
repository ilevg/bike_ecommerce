import { useContext } from "react";
import { ListproductsContext } from "../context";
import { sortArrByDateDesc } from "../helpers/sortArr";

export const useSortProducts = (categoryName, sliceNumbers) => {
  const [products] = useContext(ListproductsContext);
 
  const newListEquip = [];

  categoryName
    ? products &&
      products.map((product) => {
        product.categories[0] &&
          product.categories[0].name === categoryName &&
          newListEquip.push(product);
        return null;
      })
    : products &&
      products.map((product) => {
        newListEquip.push(product);
        return null;
      });

  const sortEquipList = newListEquip
    .slice(0, +sliceNumbers)
    .sort(sortArrByDateDesc);
  return sortEquipList;
};
