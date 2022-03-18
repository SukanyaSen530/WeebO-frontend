const sortData = ({ productsFilter: { sortOption } }, data) => {
  if (sortOption === "HIGH_TO_LOW|price") {
    return [...data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))];
  } else if (sortOption === "LOW_TO_HIGH|price") {
    return [...data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))];
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
    .filter((product) => parseFloat(product?.price) <= parseFloat(maxPrice))
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
