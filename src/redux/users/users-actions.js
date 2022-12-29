import { ADD_USER, DELETE_USER } from './users-types';

// export const addUser = user => {
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

// export const deleteUser = id => {
//   return {
//     type: DELETE_USER,
//     payload: id,
//   };
// };


import { createAction } from "@reduxjs/toolkit";

export const addUser = createAction(ADD_USER)
export const deleteUser = createAction(DELETE_USER)