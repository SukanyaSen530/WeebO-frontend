import PropTypes from "prop-types";

import "./input-field.scss";

function InputField({ label, errorMessage, htmlFor, ...other }) {
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
}

InputField.prototype = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default InputField;
