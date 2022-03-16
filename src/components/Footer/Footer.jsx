import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__brand-icon" src={logo} alt="brand-logo" />
      </Link>

      <div className="footer__navigation u-margin-sm">
        <div>
          <h2 className="u-margin-sm">Shop By Lisence</h2>
          <ul className="footer__links-container">
            <Link to="/products" className="footer__links">
              Banpresto
            </Link>
            <Link to="/products" className="footer__links">
              Funko
            </Link>
            <Link to="/products" className="footer__links">
              S.H.Figuarts
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="u-margin-sm">Others</h2>

          <ul className="footer__links-container">
            <Link to="/" className="footer__links">
              Home
            </Link>
            <Link to="/products" className="footer__links">
              Shop
            </Link>
            <Link to="/cart" className="footer__links">
              Cart
            </Link>
            <Link to="/wishlist" className="footer__links">
              WishList
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="u-margin-sm">Connect With Me!</h2>
          <ul className="footer__links-container">
            <a href="www.linkedin.com" className="footer__links">
              LinkedIn
            </a>
            <a href="www.github.com" className="footer__links">
              Github
            </a>
            <a href="www.twitter.com" className="footer__links">
              Twitter
            </a>
          </ul>
        </div>
      </div>

      <div className="footer__copyright u-margin-sm">
        <p>
          <strong>Disclaimer - </strong>
          This website is just for illustration purposes.
        </p>
        <p>
          <strong> Copyright &copy; </strong> by Sukanya Sen, 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
