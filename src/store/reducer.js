/**
 * Root Reducer
 */
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import dialogReducer from '../features/modal/dialogSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    dialog: dialogReducer,
});

export default rootReducer;
