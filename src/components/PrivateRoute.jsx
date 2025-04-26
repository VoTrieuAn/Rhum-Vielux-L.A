import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  // return isAuthenticated ? children : <Navigate to="/login" />;
  return children;
};
export default PrivateRoute;
