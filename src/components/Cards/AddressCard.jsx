import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";

import "./address-card.scss";

const AddressCard = ({
  _id,
  name,
  pinCode,
  state,
  area,
  mobile,
  city,
  addressType,
  getIdType,
}) => {
  return (
    <article className="address-card">
      <div className="flex container flex-center-y flex-wrap">
        <p>{name}</p>, <p className="addressType">{addressType}</p>
      </div>
      <div className="flex container flex-wrap">
        <p>{area}</p> ,<p>{city}</p>,<p>{state}</p>,<p>{pinCode}</p>,
      </div>
      <p>{mobile}</p>

      <div className="flex flex-center btn-group">
        <button className="address-card__btn">
          <AiFillEdit onClick={() => getIdType(_id, "update")} />
        </button>
        <button className="address-card__btn">
          <AiFillDelete onClick={() => getIdType(_id, "delete")} />
        </button>
      </div>
    </article>
  );
};

AddressCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pinCode: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  addressType: PropTypes.oneOf(["home", "work"]),
  getIdType: PropTypes.func.isRequired,
};

export default AddressCard;
