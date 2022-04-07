import { AiFillEdit, AiFillDelete } from "react-icons/ai";

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
      <div className="flex">
        <p>{name}</p>
        <p>{addressType}</p>
      </div>
      <div className="flex">
        <p>{area}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{pinCode}</p>
      </div>
      <p>{mobile}</p>

      <div className="flex flex-center">
        <button>
          <AiFillEdit onClick={() => getIdType(_id, "update")} />
        </button>
        <button>
          <AiFillDelete onClick={() => getIdType(_id, "delete")} />
        </button>
      </div>
    </article>
  );
};

export default AddressCard;
