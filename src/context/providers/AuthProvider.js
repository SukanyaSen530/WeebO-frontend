import { useReducer, useContext, createContext, useEffect } from "react";
import PropTypes from "prop-types";

import authReducer from "../reducers/authReducer";
import { userAuthActions } from "../constants/authConstants";
import { loadWishlist, loadCart } from "../../services";
import { useUserContext } from "./UserProvider";

const authContext = createContext();

const initialState = {
  loading: false,
  fetchError: null,
  modalOpen: false,
  user: {
    token: localStorage.getItem("weeboToken"),
    details: null,
  },
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const {
    userState: {
      userWishlist: { items: wishlistItems },
      userCart: { items: cartItems },
    },
    userDispatch,
  } = useUserContext();

  const openAuthModal = () =>
    dispatch({ type: userAuthActions.OPEN_AUTH_MODAL });

  const closeAuthModal = () =>
    dispatch({ type: userAuthActions.CLOSE_AUTH_MODAL });

  useEffect(() => {
    if (wishlistItems?.length === 0 && state.user.token)
      loadWishlist(userDispatch);
  }, [state.user.token]);

  useEffect(() => {
    if (cartItems?.length === 0 && state.user.token) loadCart(userDispatch);
  }, [state.user.token]);

  return (
    <authContext.Provider
      value={{
        authState: state,
        authDispatch: dispatch,
        modalOperations: { openAuthModal, closeAuthModal },
      }}
    >
      {children}
    </authContext.Provider>
  );
};

AuthProvider.prototype = {
  children: PropTypes.element.isRequired,
};

const useAuthContext = () => useContext(authContext);

export { AuthProvider, useAuthContext };
