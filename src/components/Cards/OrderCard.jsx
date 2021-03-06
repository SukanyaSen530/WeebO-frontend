import { useState } from "react";
import PropTypes from "prop-types";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./order-card.scss";

const OrderCard = ({
  _id,
  orderItems,
  couponDiscount,
  totalPaid,
  totalAmount,
  address,
  createdAt,
}) => {
  const [show, setShow] = useState(false);
  const not_allowed = ["_id", "name", "__v"];

  return (
    <article className="order-card">
      <div className="order-card__header">
        <p className="b-margin-sm">
          <strong>OrderID: </strong> {_id}
        </p>
        <div className="flex flex-space-between flex-center-y order-card__header__details">
          <p>
            <strong>Total:</strong> ₹ {totalAmount || 0}{" "}
          </p>
          <p>
            <strong>Total Paid:</strong> ₹ {totalPaid || 0}{" "}
          </p>
          <p>
            <strong>Discount: - </strong>
            {totalPaid === couponDiscount ? "NA" : `₹ ${couponDiscount}`}{" "}
          </p>
          <p>
            <strong> Ordered Placed: </strong>{" "}
            {new Date(createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      {orderItems.map((item) => (
        <div key={item.product._id} className="order-card__item">
          <div className="flex flex-center-y">
            <img
              src={item?.product?.img[0]}
              alt={item?.product?.name}
              className="order-card__item__image"
            />
            <div className="order-card__item__content">
              <p> {item?.product?.name}</p>
              <p> {item?.product?.brandName}</p>
              <p> {item?.product?.categoryName}</p>
            </div>
          </div>

          <p className="order-card__item__quantity">
            Quantity : {item?.quantity}
          </p>

          <p className="order-card__item__price">
            ₹{" "}
            {parseInt(
              item?.product.price -
                ((item?.product.price * (item?.product.discount || 0)) / 100) *
                  item?.quantity
            )}
          </p>
        </div>
      ))}

      <div className="order-card__address">
        <div className="flex flex-space-between flex-center-y">
          <p>Shipped to - {address?.name}</p>
          {!show ? (
            <IoIosArrowDown
              onClick={() => setShow((val) => !val)}
              className="order-card__address__btn"
            />
          ) : (
            <IoIosArrowUp
              onClick={() => setShow((val) => !val)}
              className="order-card__address__btn"
            />
          )}
        </div>
        {show ? (
          <div className="order-card__address-card">
            <div className="order-card__address-card__content">
              {Object.entries(address)
                ?.filter((item) => !not_allowed.includes(item[0]))
                ?.map((item) => (
                  <p>
                    <span>{item[0]}</span> : {item[1]}
                  </p>
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
};

OrderCard.propTypes = {
  _id: PropTypes.string.isRequired,
  orderItems: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  couponDiscount: PropTypes.number,
  totalPaid: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
  address: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pinCode: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    addressType: PropTypes.oneOf(["home", "work"]),
  }),
};

export default OrderCard;
