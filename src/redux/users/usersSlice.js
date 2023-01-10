import { fetchUsers, deleteUser, addUser } from './users-operations';
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteUser.pending]: state => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addUser.pending]: state => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, payload];
    },
    [addUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
