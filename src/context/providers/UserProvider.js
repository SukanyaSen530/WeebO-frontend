import { useReducer, useContext, createContext } from "react";

import userReducer from "../reducers/userReducer";
import { userAuthActions } from "../constants/userConstants";

const userContext = createContext();

const initialState = {
  loading: false,
  fetchError: null,
  modalOpen: false,
  user: {
    token: localStorage.getItem("weeboToken"),
    details: null,
  },
  cart: {
    productIds: [],
    qty: 0,
  },
  wishlist: {
    productIds: [],
  },
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const openAuthModal = () =>
    dispatch({ type: userAuthActions.OPEN_AUTH_MODAL });

  const closeAuthModal = () =>
    dispatch({ type: userAuthActions.CLOSE_AUTH_MODAL });

  console.log(state);

  return (
    <userContext.Provider
      value={{
        userState: state,
        userDispatch: dispatch,
        modalOperations: { openAuthModal, closeAuthModal },
      }}
    >
      {children}
    </userContext.Provider>
  );
};

const useUserContext = () => useContext(userContext);

export { UserProvider, useUserContext };
