import { productActions, filterActions } from "../constants/productConstant";
import { transformData } from "../utils/productsUtils";

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case productActions.LOADING:
      return { ...state, productLoading: true, productFetchError: null };

    case productActions.LOAD_PRODUCTS:
      return {
        ...state,
        productLoading: false,
        products: transformData(payload),
        productFetchError: null,
      };

    case productActions.ERROR:
      return { ...state, productLoading: false, productFetchError: payload };

    case productActions.LOAD_SINGLE_PRODUCT:
      return {
        ...state,
        productLoading: false,
        view_product: payload,
        productFetchError: null,
      };

    // Filters

    case filterActions.SORT_OPTION:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          sortOption: payload,
        },
      };

    case filterActions.FILTER_SEARCH:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          searchQuery: payload,
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

    case filterActions.FILTER_ON_SALE:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          filterOnSale: payload,
        },
      };

    case filterActions.FILTER_BY_PRICE:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          maxPrice: payload,
        },
      };

    case filterActions.FILTER_BY_RATING:
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          filterRating: payload,
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
              filterByCategories: [
                ...state.productsFilter.filterByCategories,
                payloadCategory,
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
              filterByBrands: [
                ...state.productsFilter.filterByBrands,
                payloadBrand,
              ],
            },
          };

    case filterActions.CLEAR_FILTERS:
      return {
        ...state,
        productsFilter: {
          includeOutOfStock: true,
          filterOnSale: false,
          sortOption: "",
          filterByCategories: [],
          filterByBrands: [],
          maxPrice: 20000,
          filterRating: 0,
          searchQuery: "",
        },
      };

    default:
      return state;
  }
};

export default productReducer;
