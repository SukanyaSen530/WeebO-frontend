import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";

import { useAuthContext, useUserContext } from "../../context";

import { addToWishlist, removeFromWishlist, addToCart } from "../../services";

import "./product-card.scss";

const ProductCard = ({
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
}) => {
  const {
    authState: {
      user: { token },
    },
  } = useAuthContext();
  const { userState, userDispatch } = useUserContext();
  const {
    userWishlist: { items: wishlistItems },
    userCart: { items: cartItems },
  } = userState;

  let inWishlist = wishlistItems.some((item) => item._id === _id);
  let inCart = cartItems.some((item) => item.product._id === _id);

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
        {!token ? (
          <Link to="/cart" className="product-card__btn">
            Add to Cart
          </Link>
        ) : (
          <button
            to="/cart"
            className="product-card__btn"
            onClick={() => addToCart(_id, userDispatch)}
          >
            {inCart ? "In cart" : "Add to cart"}
          </button>
        )}

        <Link to={`/products/${_id}`} className="product-card__btn">
          <i className="fa-solid fa-binoculars"></i>
        </Link>
      </div>

      {!token ? (
        <Link to="/wishlist" className="product-card__wishlist-icon">
          <VscHeart className="product-card__wishlist-empty" />
        </Link>
      ) : (
        <button className="product-card__wishlist-icon">
          {inWishlist === true ? (
            <FaHeart
              className="product-card__wishlist-filled"
              onClick={() => removeFromWishlist(_id, userDispatch)}
            />
          ) : (
            <VscHeart
              className="product-card__wishlist-empty"
              onClick={() => addToWishlist(_id, userDispatch)}
            />
          )}
        </button>
      )}

      {tag && <span className="text-badge">{tag}</span>}

      {!inStock ? <span className="text-badge">sold out</span> : null}
      {!inStock ? (
        <Link to={`/products/${_id}`}>
          <div className="overlay"></div>
        </Link>
      ) : null}
    </article>
  );
};

ProductCard.propTypes = {
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
