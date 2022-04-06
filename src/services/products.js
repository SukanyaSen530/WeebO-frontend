import axios from "axios";

import { productActions } from "../context";
import { productURL } from "./apiUrl";

// Products
export const loadProducts = async (dispatch) => {
  try {
    dispatch({ type: productActions.LOADING });
    const response = await axios.get(productURL);

    dispatch({
      type: productActions.LOAD_PRODUCTS,
      payload: response?.data?.data || [],
    });
  } catch (e) {
    dispatch({
      type: productActions.ERROR,
      payload: "Oops! Something went wrong :(",
    });
  }
};

export const loadAProduct = async (productId, dispatch) => {
  try {
    dispatch({ type: productActions.LOADING, payload: true });
    const response = await axios.get(`${productURL}/${productId}`);

    dispatch({
      type: productActions.LOAD_SINGLE_PRODUCT,
      payload: response?.data?.data || {},
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: productActions.ERROR,
      payload: "The requested product can not be loaded!",
    });
  }
};
