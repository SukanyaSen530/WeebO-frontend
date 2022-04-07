import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useProductContext, filterActions } from "../../context";
import { brandData } from "../../utils/imageData";

import "./footer.scss";

const Footer = () => {
  const { dispatch } = useProductContext();

  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__brand-icon" src={logo} alt="brand-logo" />
      </Link>

      <div className="footer__navigation b-margin-sm">
        <div>
          <h2 className="b-margin-sm">Shop By License</h2>
          <ul className="footer__links-container">
            {brandData?.map(({ id, brandName }) => (
              <Link
                to={`/products`}
                className="footer__links"
                key={id}
                onClick={() =>
                  dispatch({
                    type: filterActions.FILTER_BY_BRANDS,
                    payload: brandName.toLowerCase(),
                  })
                }
              >
                {brandName}
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="b-margin-sm">My Account</h2>

          <ul className="footer__links-container">
            <Link to="/profile" className="footer__links">
              My Account
            </Link>
            <Link to="/profile/orders" className="footer__links">
              My Orders
            </Link>
            <Link to="/wishlist" className="footer__links">
              My Wishlist
            </Link>
            <Link to="/cart" className="footer__links">
              View Cart
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="b-margin-sm">Connect With Us!</h2>
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

