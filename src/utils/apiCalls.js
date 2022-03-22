import axios from "axios";

import { productActions } from "../context";
import { userAuthActions } from "../context";
import { productURL, authURL } from "./api";

export const loadProducts = async (dispatch) => {
  try {
    dispatch({ type: productActions.LOADING, payload: true });
    const response = await axios.get(productURL);
    console.log("response", response);
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

    console.log(response);
  } catch (e) {
    console.log(e);
    dispatch({
      type: productActions.ERROR,
      payload: "The requested product can't be loaded!",
    });
  }
};

const loginUser = async (payload, dispatch) => {
  try {
    dispatch({ type: userAuthActions.LOADING, payload: true });
    const response = await axios.post(`${authURL}/login`, payload);

    if (response.data?.token && response.data?.user)
      dispatch({
        type: userAuthActions.LOAD_USER,
        payload: { token: response.data.token, user: response.data.user },
      });
    else {
      dispatch({
        type: userAuthActions.LOAD_USER,
        payload: {},
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: userAuthActions.ERROR,
      payload: "Something wen't wrong! try again..",
    });
  }
};

export const registerUser = async (payload, dispatch) => {
  try {
    dispatch({ type: userAuthActions.LOADING, payload: true });
    const response = await axios.post(`${authURL}/signup`, payload);

    if (response.data?.token && response.data?.user)
      dispatch({
        type: userAuthActions.LOAD_USER,
        payload: { token: response.data.token, user: response.data.user },
      });
    else {
      dispatch({
        type: userAuthActions.LOAD_USER,
        payload: {},
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: userAuthActions.ERROR,
      payload: "Something wen't wrong! try again..",
    });
  }
};
