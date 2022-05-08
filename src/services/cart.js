import axios from "axios";
import { toast } from "react-toastify";

import { cartConstants } from "../context";
import { cartURL } from "./apiUrl";
import getConfig from "./tokenConfig";


// Cart
export const loadCart = async (dispatch) => {
  const config = getConfig();

  try {
    dispatch({ type: cartConstants.LOADING });
    const { data, status } = await axios.get(cartURL, config);

    if (status === 200) {
      dispatch({
        type: cartConstants.LOAD_CART,
        payload: data?.cart || [],
      });
    }
  } catch (e) {
    dispatch({
      type: cartConstants.ERROR,
      payload: e?.response?.data?.message,
    });
  }
};

export const addToCart = async (id, dispatch, quantity = 1) => {
  const config = getConfig();

  try {
    const { data, status } = await axios.post(
      `${cartURL}/add`,
      { id, quantity },
      config
    );

    if (status === 200) {
      toast.success("Added to cart!");
      dispatch({
        type: cartConstants.ADD_TO_CART,
        payload: data?.cart,
      });
    }

  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const removeFromCart = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { status } = await axios.delete(`${cartURL}/${id}`, config);

    if (status === 200) {
      toast.info("Removed from cart!");
      dispatch({
        type: cartConstants.REMOVE_FROM_CART,
        payload: id,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const increaseQuantity = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { data, status } = await axios.patch(
      `${cartURL}/${id}`,
      { action: "increment" },
      config
    );

    if (status === 200) {
      dispatch({
        type: cartConstants.INCREASE_QUANTITY,
        payload: data?.cart || [],
      });
    }

  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const decreaseQuantity = async (id, dispatch) => {
  const config = getConfig();

  try {
    const response = await axios.patch(
      `${cartURL}/${id}`,
      { action: "decrement" },
      config
    );

    const { data, status } = response;

    if (status === 200) {
      dispatch({
        type: cartConstants.DECREASE_QUANTITY,
        payload: data?.cart || [],
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

