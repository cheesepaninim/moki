import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { GET_BOARD } from '../../constants/APIs';

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        list: [],
    },
    reducers: {
        loadBoardList: (state, action) => {
            state.list = action.payload;
        },
    },
});

/**
 * select
 */
export const selectList = (state) => state.board.list;

/**
 * actions
 */
const { loadBoardList } = boardSlice.actions;

/**
 * APIs
 */
export const getBoardList = ({ size }) => async (dispatch) => {
    const res = await api.request(GET_BOARD, {
        method: 'get',
        params: { size },
    });
    if (res.status === 200) {
        dispatch(loadBoardList(res.data));
    } else {
        // todo 별도 에러 처리 하는 경우 여기에 작성
    }
};

export default boardSlice.reducer;
