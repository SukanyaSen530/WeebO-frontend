import axios from "axios";

import { userAuthActions } from "../context";
import { authURL } from "./apiUrl";

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
