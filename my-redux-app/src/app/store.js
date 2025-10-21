// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from '../features/clientsSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    auth: authReducer,
  },
});

export default store;
