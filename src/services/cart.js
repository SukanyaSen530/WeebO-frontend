import axios from "axios";
import { toast } from "react-toastify";

import { cartConstants } from "../context";
import { cartURL } from "./api";
import getConfig from "./tokenConfig";

// Cart
export const loadCart = async (dispatch) => {
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
