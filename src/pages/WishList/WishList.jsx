import { EmptyState } from "../index";
import { Loader, ProductCard } from "../../components";

import { useUserContext } from "../../context";

import emptyBox from "../../assets/empty.png";
import "./wishlist.scss";

const WishList = () => {
  const { userState } = useUserContext();

  const {
    userWishlist: { loading, error, items },
  } = userState;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyState msg={error} />;
  }

  if (items.length === 0) {
    return (
      <EmptyState
        msg="Your wishlist is empty!"
        imgSrc={emptyBox}
        path="/products"
        buttonText="Add Items to Wislist"
      />
    );
  }

  return (
    <section className="wishlist-section">
      <h1 className="secondary-heading b-margin-md">
        My WishList ( {items.length} )
      </h1>
      <div className="wishlist-section__items">
        {items.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default WishList;
