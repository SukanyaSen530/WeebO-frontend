import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { useStripe } from "@stripe/react-stripe-js";

import { useUserContext } from "../../context";
import { loadAllAddresses, payForOrder } from "../../services";
import { Loader, AddressRadio } from "../../components";

import { getItems } from "./utils/getItems";
import { calcTotal } from "../../utils/priceCalc";

import "./checkout.scss";

const Checkout = () => {
  const navigate = useNavigate();
  const { userState, userDispatch } = useUserContext();

  const [orderDetails, setOrderDetails] = useState({
    addressId: "",
    orderItems: [],
  });

  const {
    userCart: { loading: cartLoading, items: cartItems },
    userAddress: { loading: addressLoading, items: addresses },
  } = userState;
  const stripe = useStripe();

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

  /* totalPrice - total Price with discount 
     totalDiscountedPrice - total price with each indivial discount (final Price)
  */
  const { totalPrice, totalDiscountedPrice, totalQuantity } =
    calcTotal(cartItems);

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

  const makePayment = () => payForOrder(orderDetails, stripe);

  return (
    <section className="checkout-section">
      <h1 className="secondary-heading center-aligned b-margin-md">Checkout</h1>
      {/* Address */}
      <div className="flex checkout-section__container">
        <div>
          <h3 className="tertiary-heading b-margin-sm">Deliver to </h3>
          <div className="checkout-section__address-section scrollbar">
            {addressSection}
          </div>
        </div>

        <div>
          <h3 className="tertiary-heading b-margin-sm">Coupons</h3>

          <ul className="coupon-section b-margin-sm">
            <li className="flex flex-center-y gap-sm">
              <MdLocalOffer />
              {totalPrice < 20000 ? (
                <span>
                  Shop for more ₹ {20000 - totalDiscountedPrice} to use GETLUCKY
                  promocode while paying!
                </span>
              ) : (
                <span> Use GETLUCKY promocode while paying!</span>
              )}
            </li>

            <li className="flex flex-center-y gap-sm">
              <MdLocalOffer />
              {totalPrice < 40000 ? (
                <span>
                  Shop for more ₹ {40000 - totalDiscountedPrice} to use BONZANNA
                  promocode while paying!
                </span>
              ) : (
                <span> Use BONZANNA promocode while paying!</span>
              )}
            </li>

            <li className="notify">
              Use Card Number - <strong>4242 4242 4242 4242</strong> for
              successful payment!
            </li>
          </ul>

          <h3 className="tertiary-heading b-margin-sm">Order Summary</h3>

          <ul className="order-details">
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
              Price ({totalQuantity} items )<span> ₹ {totalPrice} </span>
            </li>
            <li>
              Discount
              <span>- ₹ {totalPrice - totalDiscountedPrice}</span>
            </li>

            <li>
              Total Amount
              <span>₹ {totalDiscountedPrice}</span>
            </li>

            <div className="divider"></div>
            <li>
              You will save ₹ {totalPrice - totalDiscountedPrice} in this order
            </li>
            <p className="divider"></p>

            <button
              className="btn btn--md btn--primary order-details__btn"
              // disabled={!orderDetails.addressId}
              onClick={makePayment}
              disabled={true}
            >
              Place Order
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
