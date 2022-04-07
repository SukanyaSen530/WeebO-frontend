import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const AddressCard = ({
  name,
  pinCode,
  state,
  area,
  mobile,
  city,
  addressType,
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
          <AiFillEdit />
        </button>
        <button>
          <AiFillDelete />
        </button>
      </div>
    </article>
  );
};

export default AddressCard;
