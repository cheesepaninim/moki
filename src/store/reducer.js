/**
 * Root Reducer
 */
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import likeReducer from '../features/like/likeSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    like: likeReducer,
});

export default rootReducer;
