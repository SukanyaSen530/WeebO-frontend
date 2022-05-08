import axios from "axios";

import { orderConstants } from "../context";
import { orderURL } from "./apiUrl";
import getConfig from "./tokenConfig";

// Orders
export const loadAllOrders = async (dispatch) => {
  const config = getConfig();

  try {
    dispatch({ type: orderConstants.LOADING });
    const { data, status } = await axios.get(orderURL, config);

    if (status === 200) {
      dispatch({
        type: orderConstants.LOAD_ORDERS,
        payload: data?.orders || [],
      });
    }
  } catch (e) {
    dispatch({
      type: orderConstants.ERROR,
      payload: e?.response?.data?.message,
    });
  }
};
