import { sortArrByDateDesc } from "../../../helpers/sortArr";
import { fetchProducts } from "../../../services/apiService";

const productsList = await fetchProducts();

export const newProductsList = productsList.slice(0, 8).sort(sortArrByDateDesc);
