import React from "react";
import { Link } from "react-router-dom";

import "./error.scss";

import errorImage from "../../assets/error.jpg";

const ErrorPage = ({
  msg = "Unable to fetch data. Check you internet coonection!",
}) => {
  return (
    <section className="error-section">
      <img src={errorImage} alt="error image" className="error-img" />
      <div>
        <p className="error-text">{msg}</p>
        <Link to="/" className="link error-btn">
          Go back to Home Page
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
