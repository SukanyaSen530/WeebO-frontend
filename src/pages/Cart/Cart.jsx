import ErrorPage from "../ErrorPage/ErrorPage";
import { Loader, CartCard } from "../../components";

import { useUserContext } from "../../context";

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

  if (items.length === 0) {
    return (
      <ErrorPage
        msg="Your cart is empty!"
        imgSrc={emptyBox}
        path="/products"
        buttonText="Add Items to Cart"
      />
    );
  }

  return (
    <section className="cart-section">
      <h1 className="cart-section__heading b-margin-md">
        My Cart ( {items.length} )
      </h1>
      Cart
    </section>
  );
};

export default Cart;
