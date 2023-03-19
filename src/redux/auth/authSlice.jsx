import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoad: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoad = false;
    },
    [authOperation.register.pending](state) {
      state.isLoad = true;
    },
    [authOperation.register.rejected](state) {
      state.isLoad = false;
    },
    [authOperation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoad = false;
    },
    [authOperation.logIn.pending](state) {
      state.isLoad = true;
    },
    [authOperation.logIn.rejected](state) {
      state.isLoad = false;
    },
    [authOperation.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoad = false;
    },
    [authOperation.logOut.pending](state) {
      state.isLoad = true;
    },
    [authOperation.logOut.rejected](state) {
      state.isLoad = false;
    },
    [authOperation.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoad = false;
    },
    [authOperation.fetchCurrentUser.pending](state) {
      state.isLoad = true;
    },
    [authOperation.fetchCurrentUser.rejected](state) {
      state.isLoad = false;
    },
  },
});