import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { useAuthContext } from "../context";

const ProtectedRoutes = ({ children }) => {
  const {
    authState: {
      user: { token },
    },
    modalOperations: { openAuthModal },
  } = useAuthContext();

  let location = useLocation();

  if (!token) {
    openAuthModal();
    return <Navigate to="/products" state={{ from: location }} replace />;
  }

  return children;
};

ProtectedRoutes.prototype = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoutes;
