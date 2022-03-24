import { useReducer, useContext, createContext } from "react";

import authReducer from "../reducers/authReducer";
import { userAuthActions } from "../constants/authConstants";

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

  const openAuthModal = () =>
    dispatch({ type: userAuthActions.OPEN_AUTH_MODAL });

  const closeAuthModal = () =>
    dispatch({ type: userAuthActions.CLOSE_AUTH_MODAL });

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

const useAuthContext = () => useContext(authContext);

export { AuthProvider, useAuthContext };
