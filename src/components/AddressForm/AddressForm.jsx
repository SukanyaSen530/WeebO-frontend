import { useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "../index";

import { InputField } from "../index";
import { states } from "../../utils/stateData";

import "./address-form.scss";
import { initalObj } from "../../pages/UserDetails/Address";

const inputData = [
  {
    id: "input1",
    name: "name",
    required: true,
    type: "text",
    autoFocus: true,
  },
  {
    id: "input2",
    name: "mobile",
    required: true,
    type: "text",
    minLength: 10,
    maxLength: 10,
    pattern: "[0-9]{10}",
    title: "Must be 10 digits",
  },
  { id: "input3", name: "area", required: true, type: "text" },
  { id: "input4", name: "city", required: true, type: "text" },
  {
    id: "input5",
    name: "pinCode",
    required: true,
    type: "text",
    minLength: 6,
    maxLength: 6,
    pattern: "[0-9]{6}",
    title: "Must be 6 digits",
  },
];

const AddressForm = ({
  open,
  onClose,
  type,
  address,
  setAddress,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setAddress((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    if (!open) {
      setAddress({ ...initalObj });
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit} className="address-form">
        <div className="address-form__inputs">
          {inputData.map((item) => (
            <InputField
              autoFocus
              key={item.id}
              onChange={handleChange}
              label={item.name}
              id={item.id}
              {...item}
              htmlFor={item.id}
              value={address[item.name]}
            />
          ))}
          <div className="input-group">
            <label htmlFor="state" className="input-group__label">
              Select State
            </label>
            <select
              name="state"
              id="state"
              className="input-group__input"
              value={address.state}
              onChange={handleChange}
            >
              <option disabled value="">
                Select
              </option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex address-from__radio-group flex-center">
          <div className="address-form__radio">
            <input
              type="radio"
              name="addressType"
              id="home"
              value="home"
              defaultChecked={address.addressType === "home"}
              onClick={handleChange}
            />
            <label htmlFor="home">Home</label>
          </div>
          <div className="address-form__radio">
            <input
              type="radio"
              name="addressType"
              id="work"
              value="work"
              defaultChecked={address.addressType === "work"}
              onClick={handleChange}
            />
            <label htmlFor="work">Work</label>
          </div>
        </div>
        <div className="flex flex-center address-form__btn-group t-margin-sm">
          <button type="submit" className="btn btn--primary">
            {type ? "Add" : "Update"}
          </button>
          <button onClick={onClose} className="btn btn--outlined">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

AddressForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.bool,
  address: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    pinCode: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    addressType: PropTypes.oneOf(["home", "work"]),
  }),
  setAddress: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default AddressForm;
