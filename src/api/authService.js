import axiosInstance from './axiosInstance';

/** Connexion utilisateur - SignIn.jsx **/
export const loginUser = async (email, password) => {
  const response = await axiosInstance.post('/login', {
    email,
    password,
  });
  return response.data;
};

/** Récupération du profil utilisateur - App.jsx **/
export const fetchUserProfile = async (token) => {
  const response = await axiosInstance.post(
    '/profile',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

/** Mise à jour du profil utilisateur - UserHero.jsx **/
export const updateUserProfile = async (token, firstName, lastName) => {
  const response = await axiosInstance.put(
    '/profile',
    { firstName, lastName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};