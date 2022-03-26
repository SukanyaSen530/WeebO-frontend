import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

import {
  useProductContext,
  useUserContext,
  useAuthContext,
} from "../../context";
import { Loader } from "../../components";
import { ErrorPage } from "../ErrorPage";
import { loadAProduct } from "../../utils/apiCalls";

import "./product.scss";

const Product = () => {
  const params = useParams();
  const productId = params.productId;

  const {
    state: { productLoading, productFetchError, view_product },
    dispatch,
  } = useProductContext();
  const { userState } = useUserContext();
  const {
    authState: {
      user: { token },
    },
    modalOperations: { openAuthModal },
  } = useAuthContext();

  const {
    userWishlist: { items: wishlistItems },
    userCart: { items: cartItems },
  } = userState;

  useEffect(() => {
    loadAProduct(productId, dispatch);
  }, [dispatch]);

  if (productLoading) {
    return <Loader />;
  }

  if (productFetchError) {
    return <ErrorPage msg={productFetchError} />;
  }

  const {
    _id,
    name,
    brandName,
    price,
    discount,
    img,
    specification,
    rating,
    inStock,
    description,
    categoryName,
  } = view_product;

  let inWishlist = wishlistItems.some((item) => item._id === _id);
  let inCart = cartItems.some((item) => item.product._id === _id);

  return (
    <section className="productdetails-section">
      <article className="product-details">
        <div className="image-container">
          {img?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`product-image${index}`}
              className="image-container__image"
            />
          ))}
        </div>

        <div className="product-content">
          <h2 className="product-content__heading">
            {categoryName} - {name} figure by {brandName}
          </h2>

          <p className="product-content__brand">
            <span>
              {brandName}
              <span className="rating">
                {rating} <BsFillStarFill />
              </span>
            </span>
          </p>

          <div className="product-content__price-container t-margin-sm b-margin-sm">
            <p className={`${discount ? "strike" : "product-price"}`}>
              ₹ {price}
            </p>
            {discount && (
              <>
                <p className="product-price">
                  ₹ {parseInt(price - (price * discount) / 100)}
                </p>
                <p className="product-discount">{discount} % off</p>
              </>
            )}
          </div>

          <div className="product-content__actions">
            {!token ? (
              <button
                className="btn btn--primary btn--md btn--contained product-content__btn"
                onClick={openAuthModal}
              >
                Login to Add the product to cart / wishlist
              </button>
            ) : (
              <>
                <button
                  className={`btn btn--primary btn--md btn--contained product-content__btn`}
                  disabled={!inStock || inCart}
                >
                  {!inStock
                    ? "Out of stock"
                    : inCart
                    ? "Already in cart"
                    : "Add to cart"}
                </button>
                <button
                  className={`btn btn--outlined btn--md btn--contained product-content__btn`}
                  disabled={!inStock || inWishlist}
                >
                  Add to wishlist
                </button>
              </>
            )}
          </div>

          <div className="t-margin-md">
            <p className="b-margin-sm product-content__description">
              {description}
            </p>
            <h4 className="product-content__specification">Specifications :</h4>
            <ul className="product-content__specification-list">
              <li>Height : {specification?.size} inches</li>
              <li>Material: {specification?.material}</li>
              <li>Age : {specification?.age}</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
