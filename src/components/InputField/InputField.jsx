import PropTypes from "prop-types";

import "./input-field.scss";

const InputField = ({ label, errorMessage, htmlFor, ...other }) => {
  return (
    <div className="input-group">
      <label className="input-group__label" htmlFor={htmlFor ? htmlFor : ""}>
        {label}
      </label>
      <input {...other} className="input-group__input" placeholder={label} />
      {errorMessage && (
        <span className="input-group__error-message">{errorMessage}</span>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

export default InputField;
