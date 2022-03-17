import { productActions, filterActions } from "../constants/productConstant";

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case productActions.LOADING:
      return { ...state, productLoading: true, productFetchError: null };

    case productActions.LOAD_PRODUCTS:
      return { ...state, productLoading: false, products: payload };

    case productActions.ERROR:
      return { ...state, productLoading: false, productFetchError: payload };

    case filterActions.SORT_BY_PRICE:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          sortByPrice: payload,
        },
      };

    case filterActions.SORT_BY_RATING:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          sortByRating: payload,
        },
      };

    case filterActions.FILTER_OUTOFSTOCK:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          includeOutOfStock: payload,
        },
      };

    case filterActions.FILTER_BY_CATEGORIES:
      const payloadCategory = payload?.toLowerCase() || "";
      if (payloadCategory === "") return state;
      return state.productsFilter.filterByCategories.includes(payloadCategory)
        ? {
            ...state,
            productsFilter: {
              ...state.productsFilter,
              filterByCategories:
                state.productsFilter.filterByCategories.filter(
                  (category) => category !== payloadCategory
                ),
            },
          }
        : {
            ...state,
            productsFilter: {
              ...state.productsFilter,
              filterByBrands: [
                ...state.productsFilter.filterByCategories.push(
                  payloadCategory
                ),
              ],
            },
          };

    case filterActions.FILTER_BY_BRANDS:
      const payloadBrand = payload?.toLowerCase() || "";
      if (payloadBrand === "") return state;
      return state.productsFilter.filterByBrands.includes(payloadBrand)
        ? {
            ...state,
            productsFilter: {
              ...state.productsFilter,
              filterByBrands: state.productsFilter.filterByBrands.filter(
                (brand) => brand !== payloadBrand
              ),
            },
          }
        : {
            ...state,
            productsFilter: {
              ...state.productsFilter,
              filterByCategories: [
                ...state.productsFilter.filterByBrands.push(payloadBrand),
              ],
            },
          };

    case productActions.FILTER_BY_PRICE:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          filterByPrice: payload,
        },
      };

    case productActions.FILTER_SEARCH:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          search: payload,
        },
      };

    case productActions.CLEAR_FILTERS:
      return {
        ...state,
        productsFilter: {
          includeOutOfStock: false,
          filterOnSale: false,
          sortByPrice: "",
          sortByRating: "",
          filterByCategories: [],
          filterByBrands: [],
          filterByPrice: "",
          search: "",
        },
      };

    default:
      break;
  }
};

export default productReducer;
