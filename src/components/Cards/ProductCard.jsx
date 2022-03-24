import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill, BsFillStarFill } from "react-icons/bs";

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
  discountedPrice,
}) {
  let inWishlist = false;

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
            {discount && <p className="product-price">₹ {discountedPrice}</p>}
            <p className={`${discount ? "strike" : "product-price"}`}>
              ₹ {price}
            </p>
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
          <i className="fa-solid fa-binoculars"></i>
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

      {!inStock ? <span className="text-badge">sold out</span> : null}
      {!inStock ? (
        <Link to={`/products/${_id}`}>
          <div className="overlay"></div>
        </Link>
      ) : null}
    </article>
  );
}

ProductCard.prototype = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  tag: PropTypes.string,
  img: PropTypes.arrayOf(PropTypes.string),
  inStock: PropTypes.bool,
  rating: PropTypes.number.isRequired,
};

export default ProductCard;
