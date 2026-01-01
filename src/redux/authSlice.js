import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { token, user } = action.payload;  // Payload contient les informations utilisateur
      state.isAuthenticated = true;
      state.token = token;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('authToken');
    },
    initAuth(state, action) {
      const token = action.payload;
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      }
    },
  },
});

export const { login, logout, initAuth } = authSlice.actions;
export default authSlice.reducer;