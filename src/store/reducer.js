/**
 * Root Reducer
 */
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import alertReducer from '../features/modal/alertSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    alert: alertReducer,
});

export default rootReducer;
