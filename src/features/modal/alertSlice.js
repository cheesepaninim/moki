import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        open: false,
    },
    reducers: {
        toggleAlert: (state, action) => {
            state.open = action.payload;
        },
    },
});

/**
 * select
 */
export const selectOpen = (state) => state.alert.open;

/**
 * actions
 */
export const { toggleAlert } = alertSlice.actions;

/**
 * APIs
 */


export default alertSlice.reducer;
