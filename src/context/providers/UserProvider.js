import { useReducer, useContext, createContext } from "react";

import userReducer from "../reducers/userReducer";

const userContext = createContext();

const initialState = {
  loading: false,
  fetchError: null,
  user: {
    token: null,
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

  console.log(state);

  return (
    <userContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </userContext.Provider>
  );
};

const useUserContext = () => useContext(userContext);

export { UserProvider, useUserContext };
