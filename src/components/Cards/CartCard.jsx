import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./cart-card.scss";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToWishlist,
} from "../../services";

import { useUserContext } from "../../context";

const CartCard = ({
  _id,
  name,
  img,
  discount,
  price,
  brandName,
  categoryName,
  quantity,
}) => {
  const { userState, userDispatch } = useUserContext();

  const {
    userWishlist: { items: wishlistItems },
  } = userState;

  let inWishlist = wishlistItems.some((item) => item._id === _id);

  const discountedPrice = parseInt(price - (price * discount || 0) / 100);
  const totalPrice = discountedPrice * quantity;

  const handleMoveToWishlist = () => {
    if (!inWishlist) {
      addToWishlist(_id, userDispatch);
      removeFromCart(_id, userDispatch);
    } else return;
  };

  return (
    <article className="cart-card">
      <div className="cart-card__product-details">
        <Link to={`/products/${_id}`}>
          <img src={img[0]} alt="" className="cart-card__img" />
        </Link>
        <div>
          <p>
            {name} by {brandName}
          </p>
          <p className="brand-name">{categoryName}</p>
          {discount && (
            <p className="product-discount"> (- {discount}% off) </p>
          )}

          <div className="cart-card__actions">
            <button
              className="cart-card__actions__btn"
              disabled={inWishlist}
              onClick={() => handleMoveToWishlist()}
            >
              {inWishlist ? "Already in Wishlist" : "Move to Wishlist"}
            </button>

            <button
              className="cart-card__actions__btn"
              onClick={() => removeFromCart(_id, userDispatch)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="cart-card__content">
        <div className="cart-card__qty-box">
          <button
            className="btn btn--primary"
            onClick={() => decreaseQuantity(_id, userDispatch)}
          >
            -
          </button>
          <span className="cart-card__qty-box__display">{quantity}</span>
          <button
            className="btn btn--primary"
            onClick={() => increaseQuantity(_id, userDispatch)}
          >
            +
          </button>
        </div>
        <div className="product-card__price-details">
          {discount && <p className="cart-card__price">₹ {discountedPrice}</p>}
          <p className={`${discount ? "strike" : "product-price"}`}>
            ₹ {price}
          </p>
        </div>
        <p className="cart-card__total">₹ {totalPrice}</p>
      </div>
    </article>
  );
};

CartCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  categoryName: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string),
  quantity: PropTypes.number.isRequired,
};

export default CartCard;
