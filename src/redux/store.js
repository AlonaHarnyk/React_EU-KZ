import usersReducer from './users/usersSlice';
import authReducer from './auth/authSlice'
import {configureStore} from '@reduxjs/toolkit';
 export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer
    }
 })