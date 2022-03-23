import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Auth from "../Auth/Auth";

import { userAuthActions, useUserContext } from "../../context";

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
  const {
    userState: {
      modalOpen,
      user: { token },
    },
    modalOperations,
    userDispatch,
  } = useUserContext();
  const { openAuthModal, closeAuthModal } = modalOperations;

  //Login & Signup
  const [modalType, setModalType] = useState(true);

  const signedInRoutes = (
    <>
      <Link to="/wishlist" className="btn-icon badge">
        <FaHandHoldingHeart className="btn-icon__icon" />
        <span className="btn-icon__text">Wishlist</span>
        <span className="badge__count"> 3 </span>
      </Link>

      <Link to="/cart" className="btn-icon badge">
        <AiOutlineShoppingCart className="btn-icon__icon" />
        <span className="btn-icon__text">Cart</span>
        <span className="badge__count"> 1 </span>
      </Link>

      <button
        className="btn btn--md btn--primary"
        onClick={() => userDispatch({ type: userAuthActions.LOGOUT })}
      >
        Logout
      </button>
    </>
  );

  const signedOutRoutes = (
    <>
      <button
        className="btn btn btn--round btn--primary btn--md"
        onClick={() => {
          setModalType(true);
          openAuthModal();
        }}
      >
        Log In
      </button>

      <button
        className="btn btn--outlined btn--round btn--md"
        onClick={() => {
          setModalType(false);
          openAuthModal();
        }}
      >
        Sign Up
      </button>
    </>
  );

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
        {!token ? signedOutRoutes : signedInRoutes}
        <Auth type={modalType} open={modalOpen} onClose={closeAuthModal} />
      </ul>
    </nav>
  );
};

export default Navbar;
