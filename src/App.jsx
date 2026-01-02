import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUser } from './redux/authSlice';
import axiosInstance from './api/axiosInstance';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  // 🔁 Rehydratation au refresh
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      dispatch(login(storedToken));
    }
  }, [dispatch]);

  // 👤 Chargement du profil
  useEffect(() => {
    if (!token) return;

    axiosInstance.post(
        '/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setUser(res.data.body));
      })
      .catch(() => {
        console.error('Erreur récupération profil');
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
