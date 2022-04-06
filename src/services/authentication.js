import axios from "axios";

import { userAuthActions } from "../context";
import { authURL } from "./apiUrl";

// Auth
export const loginUser = async (payload, dispatch) => {
  try {
    dispatch({ type: userAuthActions.LOADING });
    const { data, status } = await axios.post(`${authURL}/login`, payload);

    if (status === 200) {
      dispatch({
        type: userAuthActions.LOAD_USER,
        payload: { token: data?.token, user: data?.user },
      });
    }
  } catch (e) {
    dispatch({
      type: userAuthActions.ERROR,
      payload: e.response.data.message,
    });
  }
};

export const registerUser = async (payload, dispatch) => {
  try {
    dispatch({ type: userAuthActions.LOADING });
    const { data, status } = await axios.post(`${authURL}/signup`, payload);

    if (status === 201) {
      dispatch({
        type: userAuthActions.LOAD_USER,
        payload: { token: data?.token, user: data?.user },
      });
    }
  } catch (e) {
    dispatch({
      type: userAuthActions.ERROR,
      payload: e.response.data.message,
    });
  }
};
