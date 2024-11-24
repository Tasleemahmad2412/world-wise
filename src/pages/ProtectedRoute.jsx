import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  //In casae that the user is not allowed to redirect away from the application
  // This component needs to know if the user is authenticated or NOT
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;

// React Router Protected Routes
