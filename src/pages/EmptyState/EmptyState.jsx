import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./empty-state.scss";
import errorImage from "../../assets/error.jpg";

const EmptyState = ({
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

EmptyState.propTypes = {
  msg: PropTypes.string,
  imgSrc: PropTypes.string,
  buttonText: PropTypes.string,
  path: PropTypes.string,
};

export default EmptyState;
