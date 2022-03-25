import { wishlistConstants } from "../constants/userConstants";
import { transformData } from "../utils/productsUtils";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case wishlistConstants.LOADING:
      return {
        ...state,
        userWishlist: { ...state.userWishlist, loading: true },
      };

    case wishlistConstants.LOAD_WISHLIST:
      return {
        ...state,
        userWishlist: {
          error: null,
          loading: false,
          items: transformData(payload),
        },
      };

    case wishlistConstants.ERROR:
      return {
        ...state,
        userWishlist: { error: payload, loading: false, items: [] },
      };

    case wishlistConstants.ADD_TO_WISHLIST:
      return {
        ...state,
        userWishlist: {
          error: null,
          loading: false,
          items: transformData(payload),
        },
      };

    case wishlistConstants.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        userWishlist: {
          error: null,
          loading: false,
          items: state.userWishlist.items.filter(
            (item) => item._id !== payload
          ),
        },
      };

    default:
      return state;
  }
};

export default authReducer;
