// const backend_URL = process.env.REACT_APP_BASE_URL;
const backend_URL = process.env.REACT_APP_DEV_URL;

const productURL = `${backend_URL}products`;
const authURL = `${backend_URL}auth`;
const wishListURL = `${backend_URL}wishlist`;
const cartURL = `${backend_URL}cart`;

export { productURL, authURL, wishListURL, cartURL };
