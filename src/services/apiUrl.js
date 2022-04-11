const api = process.env.REACT_APP_BASE_URL;

const productURL = `${api}products`;
const authURL = `${api}auth`;
const wishListURL = `${api}wishlist`;
const cartURL = `${api}cart`;
const addressURL = `${api}address`;

export { productURL, authURL, wishListURL, cartURL, addressURL };
