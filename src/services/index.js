import { loginUser, registerUser, getUserDetails } from "./authentication";
import { loadAProduct, loadProducts } from "./products";
import { loadWishlist, addToWishlist, removeFromWishlist } from "./wishlist";
import {
  loadCart,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  removeFromCart,
} from "./cart";
import {
  loadAllAddresses,
  addAddress,
  updateAddress,
  removeAddress,
} from "./addresses";
import { loadAllOrders } from "./order";
import { payForOrder } from "./payment";

export {
  loginUser,
  registerUser,
  getUserDetails,
  loadAProduct,
  loadProducts,
  loadWishlist,
  addToWishlist,
  removeFromWishlist,
  loadCart,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  removeFromCart,
  loadAllAddresses,
  addAddress,
  updateAddress,
  removeAddress,
  loadAllOrders,
  payForOrder,
};
