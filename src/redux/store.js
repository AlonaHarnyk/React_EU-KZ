import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { usersReducer } from './users/users-reducers';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({ users: usersReducer });

export const store = createStore(rootReducer, enhancer);
