import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDetails = () => {
  return (
    <section>
      <Link to="/user">Profile</Link>
      <Link to="/user/address">Address</Link>
      <Link to="/user/orders">Orders</Link>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default UserDetails;
