import axios from "axios";

import { productActions } from "../context";
import { userAuthActions } from "../context";
import { productURL, authURL, wishListURL } from "./api";

// Products
export const loadProducts = async (dispatch) => {
  try {
    dispatch({ type: productActions.LOADING, payload: true });
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
      payload: "The requested product can't be loaded!",
    });
  }
};

// Auth
export const loginUser = async (payload, dispatch) => {
  try {
    dispatch({ type: userAuthActions.LOADING, payload: true });
    const response = await axios.post(`${authURL}/login`, payload);

    dispatch({
      type: userAuthActions.LOAD_USER,
      payload: { token: response.data.token, user: response.data.user },
    });
  } catch (e) {
    dispatch({
      type: userAuthActions.ERROR,
      payload: e.response.data.message,
    });
  }
};

export const registerUser = async (payload, dispatch) => {
  try {
    dispatch({ type: userAuthActions.LOADING, payload: true });
    const response = await axios.post(`${authURL}/signup`, payload);

    dispatch({
      type: userAuthActions.LOAD_USER,
      payload: { token: response.data.token, user: response.data.user },
    });
  } catch (e) {
    console.log(e.response.data.message);
    dispatch({
      type: userAuthActions.ERROR,
      payload: e.response.data.message,
    });
  }
};

// Wishlist

const token = localStorage.getItem("weeboToken");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const loadWishlist = async (dispatch) => {
  try {
    dispatch({ type: productActions.LOADING, payload: true });
    const response = await axios.get(wishListURL, config);
    dispatch({});
  } catch (e) {
    dispatch({});
  }
};

export const addToWishlist = async (id, dispatch) => {
  try {
    dispatch({ type: productActions.LOADING, payload: true });
    const response = await post.get(`${wishListURL}/add`, config, { id });
    dispatch({});
  } catch (e) {
    dispatch({});
  }
};

export const removeFromWishlist = async (id, dispatch) => {
  try {
    dispatch({ type: productActions.LOADING, payload: true });
    const response = await axios.delete(`${wishListURL}/remove`, config, {
      id,
    });
    dispatch({});
  } catch (e) {
    dispatch({});
  }
};

// Cart

// Address
