import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";

export const RequiresAuth = ({ children }) => {
  let location = useLocation();

  const { isUserLoggedIn } = useAuthContext();

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
