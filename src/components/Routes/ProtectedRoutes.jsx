import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../../context";

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

export default ProtectedRoutes;
