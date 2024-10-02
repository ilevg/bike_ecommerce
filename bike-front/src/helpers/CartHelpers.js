export const createNewProduct = (
  product,
  productPrice,
  productOldPrice,
  qty
) => {
  return {
    id: product?.id,
    productPrice: productPrice,
    productOldPrice: productOldPrice,
    productImg: product?.images[0]?.src || '',
    productName: product?.name,
    productQty: qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2)),
  };
};

export const addFirstProductToCart = (product) => {
  let productPrice = product.price;
  let productOldPrice = product.regular_price;

  let newCart = {
    products: [],
    totalProductsCount: 1,
    totalProductsPrice: productPrice,
  };

  const newProduct = createNewProduct(
    product,
    productPrice,
    productOldPrice,
    1
  );
  newCart.products.push(newProduct);
  localStorage.setItem("woo-react-cart", JSON.stringify(newCart));
  return newCart;
};

export const updatedCart = (
  existingCart,
  product,
  qtyToBeAdded,
  newQty = false
) => {
  const updatedProducts = getUpdatedProducts(
    existingCart.products,
    product,
    qtyToBeAdded,
    newQty
  );
  const addPrice = (total, item) => {
    total.totalPrice += +item.totalPrice;
    total.productQty += item.productQty;
    return total;
  };

  let total = updatedProducts.reduce(addPrice, {
    totalPrice: 0,
    productQty: 0,
  });

  const updatedCartData = {
    products: updatedProducts,
    totalProductsCount: total.productQty,
    totalProductsPrice: parseFloat(total.totalPrice.toFixed(2)),
  };

  localStorage.setItem("woo-react-cart", JSON.stringify(updatedCartData));

  return updatedCartData;
};

export const getUpdatedProducts = (
  existingProductsInCart,
  product,
  qtyToBeAdded,
  newQty = false
) => {
  const productExistsIndex = isProductInCart(
    existingProductsInCart,
    product.id
  );

  if (productExistsIndex > -1) {
    let updatedProducts = [...existingProductsInCart];
    let updatedProduct = updatedProducts[productExistsIndex];

    updatedProduct.productQty = newQty
      ? parseInt(newQty)
      : parseInt(updatedProduct.productQty + qtyToBeAdded);
    updatedProduct.totalPrice = parseFloat(
      (updatedProduct.productPrice * updatedProduct.productQty).toFixed(2)
    ); // Обновлено для правильной обработки числовых значений

    return updatedProducts;
  } else {
    const productPrice = product.price;
    const productOldPrice = product.regular_price;
    const newProduct = createNewProduct(
      product,
      productPrice,
      productOldPrice,
      qtyToBeAdded
    );

    return [...existingProductsInCart, newProduct];
  }
};
export const isProductInCart = (existingProductsInCart, id) => {
  const returnItemThatExist = (item, index) => {
    if (id === item.id) {
      return item;
    }
  };

  const newArray = existingProductsInCart.filter(returnItemThatExist);
  return existingProductsInCart.indexOf(newArray[0]);
};

export const removeItemFromCart = (id) => {
  let existingCart = localStorage.getItem("woo-react-cart");
  existingCart = JSON.parse(existingCart);

  if (existingCart.products.length === 1) {
    localStorage.removeItem("woo-react-cart");
    return null;
  }

  const productExistIndex = isProductInCart(existingCart.products, id);

  if (productExistIndex > -1) {
    const productToBeRemove = existingCart.products[productExistIndex];
    const qtyToBeRemoveFromTotal = productToBeRemove.productQty;
    const priceToBeDeductedFromTotal = productToBeRemove.totalPrice;

    let updateCart = existingCart;
    updateCart.products.splice(productExistIndex, 1);
    updateCart.totalProductsCount =
      updateCart.totalProductsCount - qtyToBeRemoveFromTotal;
    updateCart.totalProductsPrice =
      updateCart.totalProductsPrice - priceToBeDeductedFromTotal;

    localStorage.setItem("woo-react-cart", JSON.stringify(updateCart));
    return updateCart;
  } else {
    return existingCart;
  }
};
