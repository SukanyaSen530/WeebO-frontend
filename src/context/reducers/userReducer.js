import {
  addressConstants,
  cartConstants,
  wishlistConstants,
} from "../constants/userConstants";
import { transformData } from "../utils/productsUtils";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // Wishlist

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
          ...state.userWishlist,
          items: state.userWishlist.items.filter(
            (item) => item._id !== payload
          ),
        },
      };

    // Cart

    case cartConstants.LOADING:
      return {
        ...state,
        userCart: { ...state.userCart, loading: true },
      };

    case cartConstants.LOAD_CART:
      return {
        ...state,
        userCart: {
          error: null,
          loading: false,
          items: payload,
        },
      };

    case cartConstants.ERROR:
      return {
        ...state,
        userCart: { error: payload, loading: false, items: [] },
      };

    case cartConstants.ADD_TO_CART:
      return {
        ...state,
        userCart: {
          error: null,
          loading: false,
          items: payload,
        },
      };

    case cartConstants.INCREASE_QUANTITY:
      return {
        ...state,
        userCart: {
          error: null,
          loading: false,
          items: payload,
        },
      };

    case cartConstants.DECREASE_QUANTITY:
      return {
        ...state,
        userCart: {
          error: null,
          loading: false,
          items: payload,
        },
      };

    case cartConstants.REMOVE_FROM_CART:
      return {
        ...state,
        userCart: {
          ...state.userCart,
          items: state.userCart.items.filter(
            (item) => item.product._id !== payload
          ),
        },
      };

    case addressConstants.LOADING:
      return { ...state, userAddress: { ...state.userAddress, loading: true } };

    case addressConstants.LOAD_ADDRESSES:
      return {
        ...state,
        userAddress: {
          error: null,
          loading: false,
          items: payload,
        },
      };

    case addressConstants.ADD_ADDRESS:
      return {
        ...state,
        userAddress: {
          ...state.userAddress,
          items: { ...state.userAddress.items, payload },
        },
      };

    case addressConstants.REMOVE_ADDRESS:
      return {
        ...state,
        userAddress: {
          ...state.userAddress,
          items: state.userAddresss.filter(
            (item) => item.product._id !== payload
          ),
        },
      };

    case addressConstants.UPDATE_ADDRESS:
      return {
        ...state,
        userAddress: {
          ...state.userAddress,
          items: state.userAddress.map((item) =>
            item._id === payload._id ? payload : item
          ),
        },
      };

    case addressConstants.ERROR:
      return {
        ...state,
        userAddress: { error: payload, loading: false, items: [] },
      };

    default:
      return state;
  }
};

export default authReducer;
