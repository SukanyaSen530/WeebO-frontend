export const getItems = (items) => {
  if (items.lenth === 0) return [];

  return items.reduce(
    (acc, curr) => [
      ...acc,
      {
        _id: curr.product?._id,
        name: curr.product?.name,
        price: curr.product?.price,
        discount: curr.product?.discount || 0,
        img: curr.product?.img[0],
        qty: curr.quantity,
      },
    ],
    []
  );
};
