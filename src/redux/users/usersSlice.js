import {
  fetchUsers,
  deleteUser,
  addUser,
  updateUser,
} from './users-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: { items: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchUsers.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchUsers.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = null;
//     },
//     [fetchUsers.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [deleteUser.pending]: state => {
//       state.isLoading = true;
//     },
//     [deleteUser.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(({ id }) => id !== payload);
//     },
//     [deleteUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [addUser.pending]: state => {
//       state.isLoading = true;
//     },
//     [addUser.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = [...state.items, payload];
//     },
//     [addUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

const usersSlice = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(user => user.id === payload.id);
        state.items[index] = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchUsers.pending,
          deleteUser.pending,
          addUser.pending,
          updateUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.fulfilled,
          deleteUser.fulfilled,
          addUser.fulfilled,
          updateUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.rejected,
          deleteUser.rejected,
          addUser.rejected,
          updateUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { changeFilter } = usersSlice.actions;
export default usersSlice.reducer;
