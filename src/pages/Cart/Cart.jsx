import ErrorPage from "../ErrorPage/ErrorPage";
import { Loader, CartCard } from "../../components";

import { useUserContext } from "../../context";
import {
  calcTotalDiscountedPrice,
  calcTotalPrice,
  calcTotalQuantity,
} from "./helper";

import emptyBox from "../../assets/empty.png";
import "./cart.scss";

const Cart = () => {
  const { userState } = useUserContext();

  const {
    userCart: { loading, error, items },
  } = userState;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage msg={error} />;
  }

  if (items.length === 0 && !loading) {
    return (
      <ErrorPage
        msg="Your cart is empty!"
        imgSrc={emptyBox}
        path="/products"
        buttonText="Add Items to Cart"
      />
    );
  }

  let totalPrice = calcTotalPrice(items);
  let totalDiscountedPrice = calcTotalDiscountedPrice(items);
  let totalQuantity = calcTotalQuantity(items);
  let savedAmount = totalPrice - totalDiscountedPrice;

  return (
    <section className="cart-section">
      <h1 className="cart-section__heading b-margin-md">
        My Cart ( {items.length} )
      </h1>
      <div className="cart-section__content">
        <section className="cart-info">
          {items.map((item) => (
            <CartCard
              key={item._id}
              {...item.product}
              quantity={item.quantity}
            />
          ))}
        </section>

        <aside className="bill-board">
          <h1 className="bill-board__heading ">Order Summary</h1>
          <p className="divider "></p>

          <ul className="bill-board__price-summary t-margin-md">
            <li>
              Price ({totalQuantity} items )
              <span className="bill-board__price"> ₹ {totalPrice}</span>
            </li>
            <li>
              Discount
              <span className="bill-board__price"> - ₹ {savedAmount}</span>
            </li>
            <li>
              Delivery Charge<span className="bill-board__price"> Free </span>
            </li>
            <li>
              Total Amount
              <span className="bill-board__price">
                ₹ {totalDiscountedPrice}
              </span>
            </li>

            <div className="divider"></div>
            <li>You will save ₹ {savedAmount} in this order </li>
            <p className="divider"></p>
          </ul>

          <button className="btn btn--md btn--primary bill-board__btn">
            Checkout
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
