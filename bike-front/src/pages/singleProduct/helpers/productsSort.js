import { sortArrByDateDesc } from "../../../helpers/sortArr";
import { fetchData } from "../../../services/apiService";

export const productsSort = async () => {
  const products = await fetchData("products");
  return products.slice(0, 8).sort(sortArrByDateDesc);
};
