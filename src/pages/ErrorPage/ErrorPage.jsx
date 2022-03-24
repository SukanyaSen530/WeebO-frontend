import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./error.scss";
import errorImage from "../../assets/error.jpg";

const ErrorPage = ({
  msg = "Unable to fetch data. Check you internet coonection!",
  imgSrc = errorImage,
  buttonText = "Go back",
  path,
}) => {
  const navigate = useNavigate();

  return (
    <section className="error-section">
      <img src={imgSrc} alt="error image" className="error-img" />
      <div>
        <p className="error-text">{msg}</p>
        <button
          className="link error-btn"
          onClick={() => (path ? navigate(path) : navigate(-1))}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

ErrorPage.prototype = {
  msg: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ErrorPage;
