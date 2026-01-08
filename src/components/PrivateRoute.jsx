import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const token = useSelector(state => state.auth.token);

  // Vérifier s'il y a un token dans localStorage ou sessionStorage
  const storedToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

  if (!isAuthenticated && !storedToken && !token) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default PrivateRoute;
