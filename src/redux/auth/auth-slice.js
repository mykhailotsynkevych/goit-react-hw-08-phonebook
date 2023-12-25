import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoding: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //REGISTRATION
    [authOperations.register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperations.register.rejected]: (state, { action }) => {
      state.isLoading = false;
      state.error = action;
    },

    //LOGIN
    [authOperations.logIn.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]: (state, { action }) => {
      state.isLoading = false;
      state.error = action;
    },

    //LOGOUT
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state, { action }) {
      state.isLoading = false;
      state.error = action;
    },

    //CURRENTUSER
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoading = true;
      state.error = null;
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, { action }) {
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
      state.error = action;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
