import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandHoldingHeart, FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { userAuthActions, useAuthContext, useUserContext } from "../../context";
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
  const navigate = useNavigate();

  //Responsive Navbar
  const [showMenu, setShowMenu] = useState(false);
  //Login & Signup
  const [modalType, setModalType] = useState(true);

  const {
    authState: {
      modalOpen,
      user: { token },
    },
    modalOperations,
    authDispatch,
  } = useAuthContext();
  const {
    userState: {
      userWishlist: { items: wishlistItems },
      userCart: { items: cartItems },
    },
  } = useUserContext();

  const { openAuthModal, closeAuthModal } = modalOperations;

  const signedInRoutes = (
    <>
      <Link to="/user" className="btn-icon badge">
        <FaUserAlt className="btn-icon__icon" />
        <span className="btn-icon__text">Profile</span>
      </Link>

      <Link to="/wishlist" className="btn-icon badge">
        <FaHandHoldingHeart className="btn-icon__icon" />
        <span className="btn-icon__text">Wishlist</span>
        <span className="badge__count"> {wishlistItems?.length} </span>
      </Link>

      <Link to="/cart" className="btn-icon badge">
        <AiOutlineShoppingCart className="btn-icon__icon" />
        <span className="btn-icon__text">Cart</span>
        <span className="badge__count"> {cartItems.length} </span>
      </Link>

      <button
        className="btn btn--md btn--primary btn--sm"
        onClick={() => {
          authDispatch({ type: userAuthActions.LOGOUT });
          navigate("/products");
        }}
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
