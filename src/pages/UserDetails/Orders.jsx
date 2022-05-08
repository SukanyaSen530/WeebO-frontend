import { useEffect } from "react";

import { loadAllOrders } from "../../services";
import { useUserContext } from "../../context";

import { Loader, OrderCard } from "../../components";

const Orders = () => {
  const {
    userState: {
      userOrders: { loading, items: orders },
    },
    userDispatch,
  } = useUserContext();

  useEffect(() => {
    if (orders?.length === 0) loadAllOrders(userDispatch);
  }, []);


  if (loading) {
    return <Loader size="md" />;
  }

  return (
    <section className="order-section">
      {orders?.length > 0 ? (
        orders.map((order) => <OrderCard {...order} key={order._id} />)
      ) : (
        <h1 className="secondary-heading">You have 0 orders!</h1>
      )}
    </section>
  );
};

export default Orders;
