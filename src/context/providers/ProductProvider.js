import { useReducer, useContext, createContext } from "react";

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
  productFetchError: null,
  productsFilter: {
    includeOutOfStock: true,
    filterOnSale: false,
    sortByPrice: "",
    sortByRating: "",
    filterByCategories: [],
    filterByBrands: [],
    filterByPrice: 20000,
    searchQuery: "",
  },
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const filteredProducts = [];

  return (
    <productContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </productContext.Provider>
  );
};

const useProductContext = () => useContext(productContext);

export { ProductProvider, useProductContext };

// compose(sortData, filterData, getSearchResults)(state, state.products) ||
