import { useReducer, useContext, createContext } from "react";
import PropTypes from "prop-types";

import productReducer from "../reducers/productReducer";

import {
  sortData,
  filterData,
  getSearchResults,
  compose,
} from "../utils/productsUtils";

const productContext = createContext();

const initialState = {
  productLoading: false,
  products: [],
  view_product: {},
  productFetchError: null,
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

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const filteredProducts = compose(
    sortData,
    getSearchResults,
    filterData
  )(state, state?.products || []);

  return (
    <productContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </productContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.element.isRequired,
};

const useProductContext = () => useContext(productContext);

export { ProductProvider, useProductContext };
