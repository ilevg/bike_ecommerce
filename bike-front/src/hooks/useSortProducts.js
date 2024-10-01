import { useContext, useEffect, useState } from "react";
import { ListproductsContext } from "../context";
import { sortArrByDateDesc } from "../helpers/sortArr";

export const useSortProducts = (categoryName, sliceNumbers) => {
  const [products] = useContext(ListproductsContext);
 const [productsList, setProductsList] = useState([])

  useEffect(() => {
    setProductsList(products)
  }, [products])
  
  const newListEquip = [];

  categoryName
    ? Array.isArray(productsList) && productsList.map((product) => {
        product.categories[0] &&
          product.categories[0].name === categoryName &&
          newListEquip.push(product);
        return null;
      })
    : Array.isArray(productsList) && productsList.map((product) => {
        newListEquip.push(product);
        return null;
      })

  const sortEquipList = newListEquip
    .slice(0, +sliceNumbers)
    .sort(sortArrByDateDesc);

  return sortEquipList;
};
