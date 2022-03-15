import React, { useState } from "react";

import "./navbar.scss";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const mainLinks = [
  {
    id: "link_1",
    path: "/",
    name: "Home",
  },
  {
    id: "link_2",
    path: "/products",
    name: "Shop",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <NavLink to="/">
          <img className="navbar__brand-icon" src={logo} alt="brand-logo" />{" "}
        </NavLink>

        <GiHamburgerMenu
          className="ham-menu"
          onClick={() => setShowMenu((option) => !option)}
        />
      </div>

      <ul className={`navbar__main-links ${showMenu ? "active-menu" : ""}`}>
        {mainLinks.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <ul
        className={`navbar__secondary-links ${showMenu ? "active-menu" : ""}`}
      >
        {/* <Link to="/login" className="btn btn btn--round btn--primary btn--md">
          Log In
        </Link>
        <Link to="/signup" className="btn btn--outlined btn--round btn--md">
          Sign Up
        </Link> */}

        <Link to="/wishlist" className="btn-icon badge">
          <BsSuitHeart className="btn-icon__icon" />
          <span className="btn-icon__text">Wishlist</span>
          <span className="badge__count"> 3 </span>
        </Link>

        <Link to="/cart" className="btn-icon badge">
          <AiOutlineShoppingCart className="btn-icon__icon" />
          <span className="btn-icon__text">Cart</span>
          <span className="badge__count"> 1 </span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
