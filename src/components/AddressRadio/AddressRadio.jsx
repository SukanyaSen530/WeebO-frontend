import PropTypes from "prop-types";
import "./address-radio.scss";

const AddressRadio = ({
  name,
  pinCode,
  state,
  area,
  mobile,
  city,
  addressType,
}) => {
  return (
    <article className="address-radio">
      <div className="flex container flex-center-y flex-wrap">
        <p>{name}</p>, <p className="addressType">{addressType}</p>
      </div>
      <div className="flex container flex-wrap">
        <p>{area}</p> ,<p>{city}</p>,<p>{state}</p>,<p>{pinCode}</p>
      </div>
      <p>{mobile}</p>
    </article>
  );
};

AddressRadio.propTypes = {
  name: PropTypes.string.isRequired,
  pinCode: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  addressType: PropTypes.oneOf(["home", "work"]),
};

export default AddressRadio;
