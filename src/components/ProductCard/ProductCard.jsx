import React from "react";

import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill, BsFillStarFill } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";

import "./product-card.scss";

function ProductCard({
  _id,
  name,
  brandName,
  price,
  discount,
  tag,
  img,
  inStock,
  rating,
  inWishlist,
}) {
  return (
    <article className="product-card">
      <Link to={`/products/${_id}`}>
        <div className="product-card__img-section">
          <img src={img[0]} alt={name} />
        </div>
      </Link>

      <div>
        <p className="product-card__title b-margin-sm t-margin-sm">
          {name} by {brandName}
        </p>
        <div className="product-card__price-details">
          <div>
            <p className={`${discount ? "strike" : "product-price"}`}>
              ₹ {price}
            </p>
            {discount && (
              <p className="product-price">
                ₹ {price - (price * discount) / 100}
              </p>
            )}
          </div>
          <p>
            {rating} <BsFillStarFill />
          </p>
        </div>
      </div>

      <div className="product-card__actions">
        <Link to="/cart" className="product-card__btn ">
          Add to Cart
        </Link>
        <Link to={`/products/${_id}`} className="product-card__btn">
          <FaStreetView className="product-card__btn__icon" />
        </Link>
      </div>

      <button className="product-card__wishlist-icon">
        {inWishlist && inWishlist === true ? (
          <BsSuitHeartFill className="product-card__wishlist-filled" />
        ) : (
          <BsSuitHeart className="product-card__wishlist-empty" />
        )}
      </button>

      {tag && <span className="text-badge">{tag}</span>}

      {!inStock ? (
        <div className="overlay">
          <Link to={`/products/${_id}`}>
            <span className="overlay__text">Out of stock</span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}

export default ProductCard;
