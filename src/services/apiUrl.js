const { REACT_APP_APP_MODE, REACT_APP_BASE_URL, REACT_APP_DEV_URL } =
  process.env;
const api =
  REACT_APP_APP_MODE === "development" ? REACT_APP_DEV_URL : REACT_APP_BASE_URL;

console.log("api", api);

const productURL = `${api}products`;
const authURL = `${api}auth`;
const wishListURL = `${api}wishlist`;
const cartURL = `${api}cart`;
const addressURL = `${api}address`;
const orderURL = `${api}order`;
const paymentURL = `${api}pay`;

export {
  productURL,
  authURL,
  wishListURL,
  cartURL,
  addressURL,
  orderURL,
  paymentURL,
};
