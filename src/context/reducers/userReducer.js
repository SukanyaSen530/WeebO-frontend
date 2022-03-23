import { userAuthActions } from "../constants/userConstants";

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case userAuthActions.LOADING:
      return { ...state, loading: true, fetchError: null };

    case userAuthActions.LOAD_USER:
      if (payload.token !== "" || !payload.token) {
        window.localStorage.setItem("weeboToken", payload.token);
      }

      return {
        ...state,
        loading: false,
        modalOpen: false,
        user: { token: payload.token, details: payload.user },
      };

    case userAuthActions.ERROR:
      return {
        ...state,
        loading: false,
        user: {},
        fetchError: payload,
      };

    case userAuthActions.LOAD_USER_PROFILE:
      return {
        ...state,
        loading: false,
        user: { ...state.user, details: payload },
      };

    case userAuthActions.OPEN_AUTH_MODAL:
      return { ...state, modalOpen: true, fetchError: null };

    case userAuthActions.CLOSE_AUTH_MODAL:
      return { ...state, modalOpen: false, fetchError: null };

    case userAuthActions.LOGOUT: {
      window.localStorage.removeItem("weeboToken");
      return {
        ...state,
        user: {},
      };
    }
  }
};

export default userReducer;
