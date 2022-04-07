import { useState, useEffect } from "react";

import { MdAddLocationAlt } from "react-icons/md";
import { AddressForm } from "../../components";

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
    </section>
  );
};

export default Address;
