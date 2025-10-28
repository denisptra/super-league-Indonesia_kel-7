import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
