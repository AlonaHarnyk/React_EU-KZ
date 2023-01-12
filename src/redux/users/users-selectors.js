import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectFilter = state => state.users.filter;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) =>
    users.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
