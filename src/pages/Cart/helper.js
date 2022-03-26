export const calcTotalPrice = (items) => {
  return items.reduce(
    (acc, curr) => acc + curr.quantity * curr.product.price,
    0
  );
};

export const calcTotalQuantity = (items) => {
  return items.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const calcTotalDiscountedPrice = (items) => {
  return items.reduce(
    (acc, curr) =>
      acc +
      parseInt(
        curr.product.price -
          (curr.product.price * curr.product.discount || 0) / 100
      ) *
        curr.quantity,
    0
  );
};
