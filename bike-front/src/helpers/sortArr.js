export const sortArrByDateAsc = (a, b) => {
  const dateA = new Date(a.date_created);
  const dateB = new Date(b.date_created);
  return dateA - dateB;
};

export const sortArrByDateDesc = (a, b) => {
  const dateA = new Date(a.date_created);
  const dateB = new Date(b.date_created);
  return dateB - dateA;
};

export const sortArrByPriceAsc = (a, b) => {
  return b.price - a.price;
};
export const sortArrByPriceDesc = (a, b) => {
  return a.price - b.price;
};
