import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        open: false,
    },
    reducers: {
        toggleDialog: (state, action) => {
            state.open = action.payload;
        },
    },
});

/**
 * select
 */
export const selectOpen = (state) => state.dialog.open;

/**
 * actions
 */
export const { toggleDialog } = dialogSlice.actions;

/**
 * APIs
 */


export default dialogSlice.reducer;
