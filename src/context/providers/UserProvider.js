import { useReducer, useContext, createContext, useEffect } from "react";
import { loadWishlist } from "../../utils/apiCalls";

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
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const token = localStorage.getItem("weeboToken");

  useEffect(() => {
    if (state.userWishlist.items?.length === 0 && token) loadWishlist(dispatch);
  }, []);

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
