import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import { validateInputs, testCredentials, initialFormValues } from "./helper";
import { useAuthContext } from "../../context";

import { loginUser, registerUser } from "../../services";

import "./auth.scss";
import loginImage from "../../assets/login.png";
import signUpImage from "../../assets/signup.png";

const Auth = ({ type, open, onClose }) => {
  const { authState, authDispatch } = useAuthContext();
  const { loading, fetchError } = authState;

  const [userData, setUserData] = useState({ ...initialFormValues });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) =>
    setUserData((data) => ({ ...data, [name]: value }));

  const handleAuth = (e) => {
    e.preventDefault();
    const err = validateInputs(userData, type);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      // type ---> true , login
      if (type === true) {
        loginUser(
          { email: userData.email, password: userData.password },
          authDispatch
        );
        setUserData({ ...initialFormValues });
      } else {
        registerUser(
          {
            email: userData.email,
            password: userData.password,
            fullName: userData.fullName,
            userName: userData.userName,
          },
          authDispatch
        );
        setUserData({ ...initialFormValues });
      }
    }
  };

  //Test Credentials
  const handleAuthwithTestCred = (e) => {
    e.preventDefault();
    setUserData(testCredentials);
  };

  //To clear inputs as soon as modal is closed
  useEffect(() => {
    setErrors({});
    setUserData({ ...initialFormValues });
  }, [open]);

  let content = null;
  //   if true --> login
  if (type) {
    content = (
      <>
        <InputField
          type="email"
          label="Email"
          name="email"
          id="email"
          value={userData.email}
          htmlFor="email"
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <InputField
          type="password"
          label="Password"
          name="password"
          id="password"
          required
          htmlFor="password"
          value={userData.password}
          onChange={handleChange}
          errorMessage={errors.password}
        />
      </>
    );
  } else {
    content = (
      <>
        <InputField
          type="text"
          label="Full Name"
          required
          htmlFor="fullName"
          name="fullName"
          id="fullName"
          value={userData.fullName}
          onChange={handleChange}
          errorMessage={errors.fullName}
        />
        <InputField
          type="text"
          label="User Name"
          name="userName"
          id="userName"
          htmlFor="userName"
          value={userData.userName}
          onChange={handleChange}
          errorMessage={errors.userName}
        />
        <InputField
          type="email"
          label="Email"
          required
          name="email"
          id="email"
          htmlFor="email"
          value={userData.email}
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <InputField
          type="password"
          label="Password"
          required
          htmlFor="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
          errorMessage={errors.password}
        />
        <InputField
          type="password"
          label="Confirm Password"
          htmlFor="confirmPassword"
          required
          name="confirmPassword"
          id="confirmPassword"
          value={userData.confirmPassword}
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
          <p className="auth-from__errorStatus">
            {fetchError ? fetchError : null}
          </p>
          {content}
          <button
            onClick={handleAuth}
            className="btn btn--round btn--primary btn--sm auth-from__btn"
          >
            {loading ? (
              <i className="fas fa-cog fa-spin"></i>
            ) : type === true ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>
          {type && (
            <button
              onClick={handleAuthwithTestCred}
              className="auth-from__cred-btn"
            >
              Load Test Credentials
            </button>
          )}
        </form>
      </div>
    </Modal>
  );
};

Auth.prototype = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.bool,
};

export default Auth;
