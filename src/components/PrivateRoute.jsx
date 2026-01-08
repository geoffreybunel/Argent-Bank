import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const token = useSelector(state => state.auth.token);

  // Vérifie s'il y a un token en localStorage pendant le chargement initial
  const storedToken = localStorage.getItem('authToken');

  if (!isAuthenticated && !storedToken && !token) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default PrivateRoute;
