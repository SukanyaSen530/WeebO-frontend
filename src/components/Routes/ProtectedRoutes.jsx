import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../../context";

const ProtectedRoutes = ({ children }) => {
  const {
    userState: {
      user: { token },
    },
    modalOperations: { openAuthModal },
  } = useUserContext();

  let location = useLocation();

  if (!token) {
    openAuthModal();
    return <Navigate to="/products" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoutes;
