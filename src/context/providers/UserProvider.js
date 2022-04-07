import { useReducer, useContext, createContext, useEffect } from "react";

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

const useUserContext = () => useContext(userContext);

export { UserProvider, useUserContext };
