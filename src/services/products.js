import axios from "axios";

import { productActions } from "../context";
import { productURL } from "./apiUrl";

// Products
export const loadProducts = async (dispatch) => {
  try {
    dispatch({ type: productActions.LOADING });
    const { data, status } = await axios.get(productURL);

    if (status === 200) {
      dispatch({
        type: productActions.LOAD_PRODUCTS,
        payload: data?.products || [],
      });
    }

  } catch (e) {
    console.log(e);
    dispatch({
      type: productActions.ERROR,
      payload: "Oops! Something went wrong :(",
    });
  }
};

export const loadAProduct = async (productId, dispatch) => {
  try {
    dispatch({ type: productActions.LOADING });
    const { data, status } = await axios.get(`${productURL}/${productId}`);

    if (status === 200) {
      dispatch({
        type: productActions.LOAD_SINGLE_PRODUCT,
        payload: data?.product || {},
      });
    }
  } catch (e) {
    dispatch({
      type: productActions.ERROR,
      payload: "The requested product can not be loaded!",
    });
  }
};
