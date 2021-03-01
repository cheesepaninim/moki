import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        list: {}
    },
    reducers: {
        toggleDialog: (state, action) => {
            const { id, show } = action.payload;
            state.list[id] = show;
        },
    },
});

/**
 * select
 */
export const selectShow = (state, id) => state.dialog.list[id];

/**
 * actions
 */
export const { toggleDialog } = dialogSlice.actions;

/**
 * APIs
 */


export default dialogSlice.reducer;
