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
  view_product: {},
  productFetchError: null,
  productsFilter: {
    includeOutOfStock: true,
    filterOnSale: false,
    sortOption: "",
    filterByCategories: [],
    filterByBrands: [],
    maxPrice: 20000,
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

const useProductContext = () => useContext(productContext);

export { ProductProvider, useProductContext };
