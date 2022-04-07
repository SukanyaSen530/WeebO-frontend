import axios from "axios";
import { toast } from "react-toastify";

import { addressConstants } from "../context";
import { addressURL } from "./apiUrl";
import getConfig from "./tokenConfig";

// Address
export const loadAllAddresses = async (dispatch) => {
  const config = getConfig();

  try {
    dispatch({ type: addressConstants.LOADING });
    const { data, status } = await axios.get(addressURL, config);

    if (status === 200) {
      dispatch({
        type: addressConstants.LOAD_ADDRESSES,
        payload: data?.addresses || [],
      });
    }
  } catch (e) {
    dispatch({
      type: addressConstants.ERROR,
      payload: e?.response?.data?.message,
    });
  }
};

export const addAddress = async (address, dispatch) => {
  const config = getConfig();

  try {
    const { data, status } = await axios.post(`${addressURL}`, address, config);

    console.log(data);

    if (status === 201) {
      toast.info("New address added!");
      dispatch({
        type: addressConstants.ADD_ADDRESS,
        payload: data?.address,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const updateAddress = async (address, dispatch) => {
  const config = getConfig();

  try {
    const { data, status } = await axios.put(
      `${addressURL}/${address._id}`,
      address,
      config
    );

    if (status === 200) {
      toast.info("Address updated!");
      dispatch({
        type: addressConstants.UPDATE_ADDRESS,
        payload: data?.address,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const removeAddress = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { status } = await axios.delete(`${addressURL}/${id}`, config);

    if (status === 200) {
      toast.info("Address removed!");
      dispatch({
        type: addressConstants.REMOVE_ADDRESS,
        payload: id,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};
