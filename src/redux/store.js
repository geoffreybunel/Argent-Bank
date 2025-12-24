import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // Ajouter d'autres reducers ici si besoin
  },
});

export default store;