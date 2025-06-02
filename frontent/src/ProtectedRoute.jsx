import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check for token or authentication flag
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;