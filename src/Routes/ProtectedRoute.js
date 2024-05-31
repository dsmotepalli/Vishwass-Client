import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, redirectPath = "/" }) => {
  if (!loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
