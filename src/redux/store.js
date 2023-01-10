import usersReducer from './users/usersSlice';
import {configureStore} from '@reduxjs/toolkit';
 export const store = configureStore({
    reducer: {
        users: usersReducer
    }
 })