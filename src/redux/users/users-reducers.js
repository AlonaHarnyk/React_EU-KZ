import { ADD_USER, DELETE_USER } from './users-types';

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [...state, payload];
    case DELETE_USER:
      return state.filter(user => user.id !== payload);
    default:
      return state;
  }
};


