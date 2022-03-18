const sortData = ({ productsFilter: { sortByPrice, sortByRating } }, data) => {
  if (sortByPrice === "HIGH_TO_LOW") {
    return [...data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))];
  } else if (sortByPrice === "LOW_TO_HIGH") {
    return [...data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))];
  } else if (sortByRating === "HIGH_TO_LOW") {
    return [
      ...data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)),
    ];
  } else if (sortByRating === "LOW_TO_HIGH") {
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
      filterByPrice,
    },
  },
  data
) => {
  return (data || [])
    .filter(
      (product) => parseFloat(product?.price) <= parseFloat(filterByPrice)
    )
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
