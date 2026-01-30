import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUser } from './redux/authSlice';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchUserProfile } from './api/authService';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  // Rehydratation au refresh
  useEffect(() => {
    let storedToken = localStorage.getItem('authToken');
    
    if (!storedToken) {
      storedToken = sessionStorage.getItem('authToken');
    }

    if (storedToken) {
      dispatch(login(storedToken));
    }
  }, [dispatch]);

  // Chargement du profil
  useEffect(() => {
    if (!token) return;

    fetchUserProfile(token)
      .then((data) => {
        dispatch(setUser(data.body));
      })
      .catch(() => {
        console.error('Erreur de récupération du profil');
      });
  }, [token, dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
