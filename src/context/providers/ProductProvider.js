import { useReducer, useContext, createContext } from "react";

import productReducer from "../reducers/productReducer";

const productContext = createContext();

const initialState = {
  productLoading: false,
  products: [],
  productFetchError: null,
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

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

const useProductContext = () => useContext(productContext);

export { ProductProvider, useProductContext };
