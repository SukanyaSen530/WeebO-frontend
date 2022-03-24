export const transformData = (data) => {
  return data.map((product) => ({
    ...product,
    discountedPrice: parseInt(
      product.price - (product.price * product?.discount || 0) / 100
    ),
  }));
};

const compareByDiscountPrice = (
  { discountedPrice: discountA },
  { discountedPrice: discountB }
) => {
  return discountB - discountA;
};

const sortData = ({ productsFilter: { sortOption } }, data) => {
  if (sortOption === "HIGH_TO_LOW|price") {
    return [...data].sort(compareByDiscountPrice);
  } else if (sortOption === "LOW_TO_HIGH|price") {
    return [...data].sort(compareByDiscountPrice).reverse();
  } else if (sortOption === "HIGH_TO_LOW|rating") {
    return [
      ...data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)),
    ];
  } else if (sortOption === "LOW_TO_HIGH|rating") {
    return [
      ...data.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating)),
    ];
  } else return data;
};

const getSearchResults = ({ productsFilter: { searchQuery } }, data) => {
  if (searchQuery !== "") {
    return data.filter((product) =>
      product.name?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
  }
  return data;
};

const filterData = (
  {
    productsFilter: {
      includeOutOfStock,
      filterOnSale,
      filterByCategories,
      filterByBrands,
      maxPrice,
    },
  },
  data
) => {
  return (data || [])
    .filter((product) => product.discountedPrice <= parseInt(maxPrice))
    .filter((product) => (includeOutOfStock ? true : product?.inStock))
    .filter(({ tag }) =>
      filterOnSale ? tag && tag.toLowerCase() === "sale" : true
    )
    .filter(({ categoryName }) =>
      filterByCategories.length !== 0
        ? categoryName &&
          filterByCategories.includes(categoryName.toLowerCase())
        : true
    )
    .filter(({ brandName }) =>
      filterByBrands.length !== 0
        ? brandName && filterByBrands.includes(brandName.toLowerCase())
        : true
    );
};

const compose =
  (...fns) =>
  (state, data) =>
    fns.reduceRight((acc, curr) => curr(state, acc), data);

export { sortData, filterData, getSearchResults, compose };
