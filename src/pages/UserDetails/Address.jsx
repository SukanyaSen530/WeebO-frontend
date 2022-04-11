import { useState, useEffect } from "react";
import { MdAddLocationAlt } from "react-icons/md";

import { AddressForm, AddressCard, Loader } from "../../components";
import { useUserContext } from "../../context";
import {
  loadAllAddresses,
  addAddress,
  removeAddress,
  updateAddress,
} from "../../services";

import "./address.scss";

export const initalObj = {
  name: "",
  pinCode: "",
  area: "",
  city: "",
  state: "",
  mobile: "",
  addressType: "home",
};

const Address = () => {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState(initalObj);
  //if true - add, false - update
  const [type, setType] = useState(true);

  const {
    userState: {
      userAddress: { loading, items: addresses },
    },
    userDispatch,
  } = useUserContext();

  useEffect(() => {
    if (addresses?.length === 0) loadAllAddresses(userDispatch);
  }, []);

  const handleModal = () => setShow((val) => !val);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type) {
      addAddress(address, userDispatch);
      setAddress(initalObj);
    } else {
      updateAddress(address, userDispatch);
      setType(true);
      setAddress(initalObj);
    }

    handleModal();
  };

  const getIdType = (id, actionType) => {
    if (actionType === "update") {
      const addressToUpdate = addresses.find((item) => item._id === id);
      setType(false);
      setAddress(addressToUpdate);
      handleModal();
    } else removeAddress(id, userDispatch);
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
        {loading ? (
          <Loader size="sm" />
        ) : addresses?.length === 0 ? (
          <h5 className="address-section__info">No addresses found!</h5>
        ) : (
          addresses?.map((item) => (
            <AddressCard key={item._id} {...item} getIdType={getIdType} />
          ))
        )}
      </div>
    </section>
  );
};

export default Address;
