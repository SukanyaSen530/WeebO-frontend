import { userAuthActions } from "../constants/userConstants";

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case userAuthActions.LOADING:
      return { ...state, loading: true, fetchError: null };

    case userAuthActions.LOAD_USER:
      return {
        ...state,
        loading: false,
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
  }
};

export default userReducer;
