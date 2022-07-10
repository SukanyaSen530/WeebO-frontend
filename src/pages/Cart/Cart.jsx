import { Link } from "react-router-dom";


import { Loader, CartCard } from "../../components";
import { EmptyState } from "../index";
import { useUserContext } from "../../context";
import { calcTotal } from "../../utils/priceCalc";
import useScrollToTop from "../../hooks/useScrollToTop";

import emptyBox from "../../assets/empty.png";
import "./cart.scss";

const Cart = () => {
  const { userState } = useUserContext();

  useScrollToTop();

  const {
    userCart: { loading, error, items },
  } = userState;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyState msg={error} />;
  }

  if (items.length === 0 && !loading) {
    return (
      <EmptyState
        msg="Your cart is empty!"
        imgSrc={emptyBox}
        path="/products"
        buttonText="Add Items to Cart"
      />
    );
  }

  const { totalPrice, totalDiscountedPrice, totalQuantity } = calcTotal(items);
  const savedAmount = totalPrice - totalDiscountedPrice;

  return (
    <section className="cart-section">
      <h1 className="secondary-heading b-margin-md">
        My Cart ( {items.length} )
      </h1>
      <div className="cart-section__content">
        <section className="cart-info scrollbar">
          {items.map((item) => (
            <CartCard
              key={item._id}
              {...item.product}
              quantity={item.quantity}
            />
          ))}
        </section>

        <aside className="bill-board">
          <h1 className="bill-board__heading ">Cart Summary</h1>
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

          <Link
            className="btn btn--md btn--primary bill-board__btn"
            to="/checkout"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
