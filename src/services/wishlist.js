import axios from "axios";
import { toast } from "react-toastify";

import { wishlistConstants } from "../context";
import { wishListURL } from "./apiUrl";
import getConfig from "./tokenConfig";

export const loadWishlist = async (dispatch) => {
  const config = getConfig();

  try {
    dispatch({ type: wishlistConstants.LOADING });
    const { data, status } = await axios.get(wishListURL, config);

    if (status === 200) {
      dispatch({
        type: wishlistConstants.LOAD_WISHLIST,
        payload: data?.wishlist || [],
      });
    }
  } catch (e) {
    dispatch({
      type: wishlistConstants.ERROR,
      payload: e.response.data.message,
    });
  }
};

export const addToWishlist = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { data, status } = await axios.post(
      `${wishListURL}/add`,
      { id },
      config
    );

    if (status === 200) {
      toast.success("Added to wishlist!");
      dispatch({
        type: wishlistConstants.ADD_TO_WISHLIST,
        payload: data?.wishlist,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const removeFromWishlist = async (id, dispatch) => {
  const config = getConfig();

  try {
    const { status } = await axios.post(
      `${wishListURL}/remove`,
      {
        id,
      },
      config
    );

    if (status === 200) {
      toast.info("Removed from wishlist!");
      dispatch({
        type: wishlistConstants.REMOVE_FROM_WISHLIST,
        payload: id,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};
