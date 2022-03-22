import "./input-field.scss";

function InputField({ label, errorMessage, ...other }) {
  return (
    <div className="input-group">
      <label className="input-group__label">{label}</label>
      <input {...other} className="input-group__input" placeholder={label} />
      {errorMessage && (
        <span className="input-group__error-message">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputField;
