import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";

import { useUserContext } from "../../context";
import AddressRadio from "./AddressRadio";
import { loadAllAddresses } from "../../services";
import { Loader } from "../../components";

import { generateRandomCoupon } from "./utils/coupon";
import { getItems } from "./utils/getItems";
import { calcTotal } from "../../utils/priceCalc";

import "./checkout.scss";

const Checkout = () => {
  const navigate = useNavigate();
  const { userState, userDispatch } = useUserContext();

  const [orderDetails, setOrderDetails] = useState({
    addressId: "",
    couponDiscount: 0,
    totalPrice: 0,
    orderItems: [],
  });

  const {
    userCart: { loading: cartLoading, items: cartItems },
    userAddress: { loading: addressLoading, items: addresses },
    userOrders: { items: orders },
  } = userState;

  if (cartItems.length === 0 && !cartLoading) navigate("/products");

  useEffect(() => {
    if (addresses?.length === 0) loadAllAddresses(userDispatch);
  }, []);

  useEffect(() => {
    setOrderDetails((details) => ({
      ...details,
      orderItems: getItems(cartItems),
    }));
  }, [cartItems]);

  const { totalPrice, totalDiscountedPrice, totalQuantity } =
    calcTotal(cartItems);

  const discountCoupon = (
    (totalPrice * orderDetails.couponDiscount) /
    100
  ).toFixed(2);
  const totalWithDiscount = totalPrice - discountCoupon;

  console.log({ discountCoupon, totalDiscountedPrice });

  let addressSection = null;

  if (addressLoading) addressSection = <Loader size="sm" />;
  else if (addresses.length === 0)
    addressSection = (
      <Link to="/user/address" className="link">
        Add Delivery Address
      </Link>
    );
  else
    addressSection = addresses?.map((address) => (
      <div key={address._id} className="checkout-section__address scrollbar">
        <input
          type="radio"
          id={address._id}
          name="addressId"
          value={address._id}
          onChange={(e) =>
            setOrderDetails((details) => ({
              ...details,
              addressId: e.target.value,
            }))
          }
        />
        <label htmlFor={address._id}>
          <AddressRadio {...address} />
        </label>
      </div>
    ));

  return (
    <section className="checkout-section">
      <h1 className="secondary-heading center-aligned b-margin-md">Checkout</h1>
      {/* Address */}
      <div className="flex checkout-section__container flex-wrap">
        <div>
          <h3 className="tertiary-heading b-margin-sm">Deliver to -</h3>
          <div className="checkout-section__address-section scrollbar">
            {addressSection}
          </div>
        </div>

        <div className="coupon-section">
          <h3 className="tertiary-heading b-margin-sm">Apply Coupon -</h3>

          <ul className="coupon-section__apply-coupon b-margin-sm">
            <li className="flex flex-center-y gap-sm">
              <input
                type="radio"
                id="new user"
                name="coupon"
                value={30}
                disabled={orders.length !== 0}
                onChange={(e) =>
                  setOrderDetails((details) => ({
                    ...details,
                    couponDiscount: e.target.value,
                  }))
                }
              />
              <label htmlFor="new user">New User (30%)</label>
            </li>
            <li className="flex flex-center-y gap-sm">
              <input
                type="radio"
                id="get lucky"
                name="coupon"
                value={generateRandomCoupon(totalPrice)}
                onChange={(e) =>
                  setOrderDetails((details) => ({
                    ...details,
                    couponDiscount: e.target.value,
                  }))
                }
              />
              <label htmlFor="get lucky">
                Get Lucky ({generateRandomCoupon(totalPrice)}%)
              </label>
            </li>
          </ul>
          <ul className="coupon-section__coupon-details">
            {totalPrice < 15000 && (
              <li className="flex flex-center-y gap-sm">
                <MdLocalOffer /> Shop for more ₹ {15000 - totalPrice} and get
                extra 5% off (Get Lucky)
              </li>
            )}
            {totalPrice < 20000 && (
              <li className="flex flex-center-y gap-sm">
                <MdLocalOffer />
                Shop for more ₹ {20000 - totalPrice} and get extra 8% off (Get
                Lucky)
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="tertiary-heading b-margin-sm">Order Summary</h3>
          <ul className="order-details">
            <p className="divider"></p>
            <li className="order-details__heading">Items</li>
            <p className="divider"></p>
            {cartItems?.map((product) => (
              <li key={product.product._id}>
                {product.product.name}
                <span>X {product.quantity}</span>
              </li>
            ))}

            <p className="divider"></p>
            <li className="order-details__heading">Price Details</li>
            <p className="divider"></p>

            <li>
              Price ({totalQuantity} items )<span> ₹ {totalPrice}</span>
            </li>
            <li>
              Discount
              <span>- ₹ {totalPrice - totalDiscountedPrice}</span>
            </li>
            {orderDetails.couponDiscount !== 0 && (
              <li>
                Coupon
                <span> - ₹ {discountCoupon} </span>
              </li>
            )}
            <li>
              Total Amount
              <span>₹ {totalWithDiscount}</span>
            </li>

            <div className="divider"></div>
            <li>
              You will save ₹{" "}
              {(
                Number(discountCoupon) +
                (totalPrice - totalDiscountedPrice)
              ).toFixed(2)}{" "}
              in this order
            </li>
            <p className="divider"></p>
          </ul>

          <button
            className="btn btn--md btn--primary bill-board__btn"
            to="/checkout"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
