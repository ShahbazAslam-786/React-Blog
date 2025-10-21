// src/features/clientsSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('clients')) || [];

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('clients', JSON.stringify(state));
      },
      prepare(client) {
        return { payload: { id: nanoid(), cleared: false, ...client } };
      },
    },
    editClient(state, action) {
      const index = state.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem('clients', JSON.stringify(state));
      }
    },
    deleteClient(state, action) {
      const updated = state.filter(c => c.id !== action.payload);
      localStorage.setItem('clients', JSON.stringify(updated));
      return updated;
    },
    toggleCleared(state, action) {
      const index = state.findIndex(c => c.id === action.payload);
      if (index !== -1) {
        state[index].cleared = !state[index].cleared;
        localStorage.setItem('clients', JSON.stringify(state));
      }
    },
    clearAllClients() {
      localStorage.removeItem('clients');
      return [];
    },
  },
});

export const { addClient, editClient, deleteClient, toggleCleared, clearAllClients } =
  clientsSlice.actions;

export default clientsSlice.reducer;
