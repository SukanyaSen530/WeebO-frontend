import { useState, useEffect } from "react";

import { MdAddLocationAlt } from "react-icons/md";
import { AddressForm, AddressCard } from "../../components";
import { useUserContext } from "../../context";
import { loadAllAddresses } from "../../services";

const Address = () => {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    pinCode: "",
    area: "",
    city: "",
    state: "",
    mobile: "",
    addressType: "home",
  });
  //if true - add, false - update
  const [type, setType] = useState(true);

  const {
    userState: {
      userAddress: { loading, error, items: addresses },
    },
    userDispatch,
  } = useUserContext();

  useEffect(() => {
    if (addresses?.length === 0) loadAllAddresses(userDispatch);
  }, []);

  const handleModal = () => setShow((val) => !val);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="address-section">
      <AddressForm
        open={show}
        onClose={handleModal}
        type={type}
        address={address}
        setAddress={setAddress}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-space-between">
        <h3 className="address-section__heading">My Addresses</h3>
        <button
          onClick={handleModal}
          className="btn btn--round btn--md btn--primary"
        >
          <MdAddLocationAlt /> Add
        </button>
      </div>
      <div className="address-section__data">
        {addresses?.map((item) => (
          <AddressCard key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Address;
