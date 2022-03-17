import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__brand-icon" src={logo} alt="brand-logo" />
      </Link>

      <div className="footer__navigation b-margin-sm">
        <div>
          <h2 className="b-margin-sm">Shop By License</h2>
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
          <h2 className="b-margin-sm">Navigate</h2>

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
          <h2 className="b-margin-sm">Connect With Me!</h2>
          <ul className="footer__links-container">
            <a
              href="https://www.linkedin.com/in/sukanya-sen-615980130/"
              className="footer__links"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SukanyaSen530"
              className="footer__links"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://twitter.com/Sukanya71873255"
              className="footer__links"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </ul>
        </div>
      </div>

      <div className="footer__copyright b-margin-sm">
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
