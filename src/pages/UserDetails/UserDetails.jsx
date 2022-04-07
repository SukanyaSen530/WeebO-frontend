import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./user-details.scss";

import { MdLocationOn } from "react-icons/md";
import { FaBoxOpen, FaUserCog } from "react-icons/fa";

const menuOptions = [
  {
    id: "u1",
    path: "/user",
    icon: <FaUserCog />,
    name: "Profile",
    details: "Details",
  },
  {
    id: "u2",
    path: "/user/address",
    icon: <MdLocationOn />,
    name: "Addresses",
    details: "All Addresses",
  },
  {
    id: "u3",
    path: "/user/orders",
    icon: <FaBoxOpen />,
    name: "Orders",
    details: "Your Orders",
  },
];

const UserDetails = () => {
  return (
    <section className="user-details-section flex flex-col flex-center">
      <div className="flex user-details-section__menu">
        {menuOptions.map((item) => (
          <Link
            className="user-details-section__links"
            key={item.id}
            to={item.path}
          >
            <p className="user-details-section__links__icon">{item.icon}</p>
            <div className="flex flex-col user-details-section__links__items">
              <span>{item.name}</span>
              <span>{item.details}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="user-details-section__outlet">
        <Outlet />
      </div>
    </section>
  );
};

export default UserDetails;
