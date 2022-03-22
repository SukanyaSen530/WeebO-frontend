import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Auth from "../Auth/Auth";

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
  //Responsive Navbar
  const [showMenu, setShowMenu] = useState(false);

  //Login & Signup
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalType, setModalType] = useState(true);
  const handleLoginShow = () => setShowLoginModal((show) => !show);

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
        <button
          className="btn btn btn--round btn--primary btn--md"
          onClick={() => {
            setModalType(true);
            handleLoginShow();
          }}
        >
          Log In
        </button>

        <button
          className="btn btn--outlined btn--round btn--md"
          onClick={() => {
            setModalType(false);
            handleLoginShow();
          }}
        >
          Sign Up
        </button>

        <Auth
          type={modalType}
          open={showLoginModal}
          onClose={handleLoginShow}
        />

        {/* <Link to="/wishlist" className="btn-icon badge">
          <FaHandHoldingHeart className="btn-icon__icon" />
          <span className="btn-icon__text">Wishlist</span>
          <span className="badge__count"> 3 </span>
        </Link>

        <Link to="/cart" className="btn-icon badge">
          <AiOutlineShoppingCart className="btn-icon__icon" />
          <span className="btn-icon__text">Cart</span>
          <span className="badge__count"> 1 </span>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
