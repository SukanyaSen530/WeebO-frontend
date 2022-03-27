import axios from "axios";

import {
  productActions,
  userAuthActions,
  wishlistConstants,
  cartConstants,
} from "../context";

import { productURL, authURL, wishListURL, cartURL } from "./api";

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

const getConfig = () => {
  const token = localStorage.getItem("weeboToken");

  if (token)
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  else return "";
};

export const loadWishlist = async (dispatch) => {
  const config = getConfig();

  try {
    dispatch({ type: wishlistConstants.LOADING });
    const response = await axios.get(wishListURL, config);

    dispatch({
      type: wishlistConstants.LOAD_WISHLIST,
      payload: response.data?.wishlist || [],
    });
  } catch (e) {
    console.log(e.response);
    dispatch({
      type: wishlistConstants.ERROR,
      payload: e.response.data.message,
    });
  }
};

export const addToWishlist = async (id, dispatch) => {
  const config = getConfig();

  try {
    const response = await axios.post(`${wishListURL}/add`, { id }, config);

    if (response.status === 200) {
      dispatch({
        type: wishlistConstants.ADD_TO_WISHLIST,
        payload: response?.data.wishlist,
      });
    }
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

export const removeFromWishlist = async (id, dispatch) => {
  const config = getConfig();

  try {
    const response = await axios.post(
      `${wishListURL}/remove`,
      {
        id,
      },
      config
    );

    if (response.status === 200) {
      dispatch({
        type: wishlistConstants.REMOVE_FROM_WISHLIST,
        payload: id,
      });
    }
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

// Cart

export const loadCart = async (dispatch, token) => {
  const config = getConfig();

  try {
    dispatch({ type: cartConstants.LOADING });
    const { data } = await axios.get(cartURL, config);

    dispatch({
      type: cartConstants.LOAD_CART,
      payload: data?.cart || [],
    });
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

export const increaseQuantity = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { data } = await axios.patch(
      `${cartURL}/${id}`,
      { action: "increment" },
      config
    );

    dispatch({
      type: cartConstants.INCREASE_QUANTITY,
      payload: data?.cart || [],
    });
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

export const decreaseQuantity = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { data } = await axios.patch(
      `${cartURL}/${id}`,
      { action: "decrement" },
      config
    );

    dispatch({
      type: cartConstants.DECREASE_QUANTITY,
      payload: data?.cart || [],
    });
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

export const addToCart = async (id, dispatch, quantity = 1) => {
  const config = getConfig();

  try {
    const response = await axios.post(
      `${cartURL}/add`,
      { id, quantity },
      config
    );

    if (response.status === 200) {
      dispatch({
        type: cartConstants.ADD_TO_CART,
        payload: response?.data?.cart,
      });
    }
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

export const removeFromCart = async (id, dispatch) => {
  const config = getConfig();

  try {
    const response = await axios.delete(`${cartURL}/${id}`, config);

    if (response.status === 200) {
      dispatch({
        type: cartConstants.REMOVE_FROM_CART,
        payload: id,
      });
    }
  } catch (e) {
    //Will be replaced by toast
    console.log(e.response.data.message);
  }
};

// Address
