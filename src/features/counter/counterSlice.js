import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        isProgress: false,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        setProgress: (state, action) => {
            state.isProgress = action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    incrementByAmount,
    setProgress,
} = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    dispatch(setProgress(true));
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
        dispatch(setProgress(false));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
export const selectIsProgress = (state) => state.counter.isProgress;

export default counterSlice.reducer;
