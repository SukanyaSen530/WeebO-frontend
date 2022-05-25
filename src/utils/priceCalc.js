export const calcTotal = (items) => {
  return items.reduce(
    (acc, curr) => {
      return {
        totalPrice: acc.totalPrice + curr.quantity * curr.product.price,
        totalQuantity: acc.totalQuantity + curr.quantity,
        totalDiscountedPrice:
          acc.totalDiscountedPrice +
          parseInt(
            curr.product.price -
              (curr.product.price * curr.product.discount || 0) / 100
          ) *
            curr.quantity,
      };
    },
    {
      totalPrice: 0,
      totalDiscountedPrice: 0,
      totalQuantity: 0,
    }
  );
};
