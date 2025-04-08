import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Check if the user has access to the protected route
const hasAccess = () => {
  return localStorage.getItem('accessGranted') === 'true';
};

// Grant access to protected routes
export const grantAccess = () => {
  localStorage.setItem('accessGranted', 'true');
};

// Revoke access to protected routes
export const revokeAccess = () => {
  localStorage.setItem('accessGranted', 'false');
};

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = useState(hasAccess());

  useEffect(() => {
    // Check authorization status
    setIsAuthorized(hasAccess());
  }, [location]);

  if (!isAuthorized) {
    // Redirect to access page with the intended destination
    return <Navigate to="/access" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
