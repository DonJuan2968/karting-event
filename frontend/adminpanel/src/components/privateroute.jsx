import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    console.log('Geen token gevonden, doorverwijzen naar login...');  // Check of dit wordt gelogd
    return <Navigate to="/login" replace />;  // Voeg 'replace' toe om geschiedenis te vervangen
  }

  return children;
};

export default PrivateRoute;
