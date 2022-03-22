import { useState } from "react";

import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import { validateInputs, testCredentials } from "./helper";

import "./auth.scss";
import loginImage from "../../assets/login.svg";
import signUpImage from "../../assets/signup.svg";

const Auth = ({ type, open, onClose }) => {
  const [userData, setUserData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) =>
    setUserData((data) => ({ ...data, [name]: value }));

  const handleAuth = (e) => {
    e.preventDefault();
    setErrors({});
    setErrors(validateInputs(userData));

    setTimeout(() => {
      setErrors({});
    }, 5000);
  };

  const handleAuthwithTestCred = () => {};

  let content = null;
  //   if true --> login
  if (type) {
    content = (
      <>
        <InputField
          type="email"
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <InputField
          type="password"
          label="Password"
          name="password"
          required
          value={userData.password}
          onChange={handleChange}
          errorMessage={errors.password}
        />
        <button
          onClick={handleAuthwithTestCred}
          className="btn btn--round btn--sm auth-from__cred-btn"
        >
          Login as Guest <i className="fas fa-cog fa-spin"></i>
        </button>
      </>
    );
  } else {
    content = (
      <>
        <InputField
          type="text"
          label="Full Name"
          required
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          errorMessage={errors.fullName}
        />
        <InputField
          type="text"
          label="User Name"
          name="userName"
          value={userData.userName}
          onChange={handleChange}
          errorMessage={errors.userName}
        />
        <InputField
          type="email"
          label="Email"
          required
          name="email"
          value={userData.email}
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <InputField
          type="password"
          label="Password"
          required
          name="password"
          value={userData.password}
          onChange={handleChange}
          errorMessage={errors.password}
        />
        <InputField
          type="password"
          label="Confirm Password"
          required
          name="confirmPassword"
          value={userData.email}
          onChange={handleChange}
          errorMessage={errors.confirmPassword}
        />
      </>
    );
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="auth-section">
        <div className="auth-section__image">
          <img
            src={type === true ? loginImage : signUpImage}
            className="resp-img"
          />
        </div>
        <form className="auth-from">
          {content}
          <button
            onClick={handleAuth}
            className="btn btn--round btn--primary auth-from__btn"
          >
            {type === true ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Auth;
