const getProductFilters = async (productsList, attributeName) => {
  const productsBrand = productsList.map((product) => {
    const findAttr = product.attributes.find(
      (attr) => attr.name === attributeName
    );
    const attrValue = findAttr && findAttr.options[0];

    return attrValue;
  });

  const uniqueAttrValues = Array.from(new Set(productsBrand));

  const filteredAttrValues = uniqueAttrValues.map((value) => {
    return {
      value: value,
      count: productsBrand.filter((item) => item === value).length,
    };
  });
  return filteredAttrValues;
};

export const itemsForFilterField = async (productsList, maxPrice) => {
  const productPriceValues = [maxPrice || 700];
  const productBrands = await getProductFilters(productsList, "Brand");
  const productCountry = await getProductFilters(productsList, "Country");
  const productYear = await getProductFilters(productsList, "Year");

  return [
    {
      title: "Brand",
      value: productBrands,
    },
    {
      title: "Price",
      value: productPriceValues,
    },
    {
      title: "Country",
      value: productCountry,
    },
    {
      title: "Year",
      value: productYear,
    },
  ];
};
