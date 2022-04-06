import axios from "axios";
import { toast } from "react-toastify";

import { wishlistConstants } from "../context";
import { wishListURL } from "./api";
import getConfig from "./tokenConfig";

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
