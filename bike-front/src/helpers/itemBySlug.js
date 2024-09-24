export const findItemBySlug = async ({ slug }, list) => {
  try {
    const productSlug =
      list &&
      list.length > 1 &&
      list.filter((product) => slug === product.slug);
    return productSlug[0] || null;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
