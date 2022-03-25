import ErrorPage from "../ErrorPage/ErrorPage";
import { Loader, ProductCard } from "../../components";

import { useUserContext } from "../../context";

import emptyBox from "../../assets/empty.png";
import "./wishlist.scss";

function WishList() {
  const { userState } = useUserContext();

  const {
    userWishlist: { loading, error, items },
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
        msg="Your wishlist is empty!"
        imgSrc={emptyBox}
        path="/products"
        buttonText="Add Items to Wislist"
      />
    );
  }

  return (
    <section className="wishlist-section">
      <h1 className="wishlist-section__heading b-margin-md">
        My WishList ( {items.length} items )
      </h1>
      <div className="wishlist-section__items">
        {items.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default WishList;
