import { sortArrByDateDesc } from "../../../helpers/sortArr";
import { fetchProducts } from "../../../services/apiService";

export const productsSort = async () => {
  const products = await fetchProducts();
  return products.slice(0, 8).sort(sortArrByDateDesc);
};
