import { useReducer, useContext, createContext } from "react";
import PropTypes from "prop-types";

import userReducer from "../reducers/userReducer";

const userContext = createContext();

const initialState = {
  userWishlist: {
    loading: false,
    error: null,
    items: [],
  },
  userCart: {
    loading: false,
    error: null,
    items: [],
  },
  userAddress: {
    loading: false,
    error: null,
    items: [],
  },
  userOrders: {
    loading: false,
    error: null,
    orders: [],
  },
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <userContext.Provider
      value={{
        userState: state,
        userDispatch: dispatch,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

UserProvider.prototype = {
  children: PropTypes.element.isRequired,
};

const useUserContext = () => useContext(userContext);

export { UserProvider, useUserContext };
