import PropTypes from "prop-types";
import "./loader.scss";

const Loader = ({ size = "lg" }) => {
  const numOfBalls = 5;
  return (
    <div className={`loader-section section-${size}`}>
      <div className="loader">
        {Array(numOfBalls)
          .fill(0)
          .map((item, index) => (
            <div
              key={`${item}${index}loader`}
              className={`loader__child`}
            ></div>
          ))}
      </div>
    </div>
  );
};

Loader.prototype = {
  size: PropTypes.oneOf(["lg", "md", "sm"]),
};

export default Loader;
