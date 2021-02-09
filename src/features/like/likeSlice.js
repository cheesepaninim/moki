import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { GET_BOARD } from '../../constants/APIs';

export const likeSlice = createSlice({
    name: 'like',
    initialState: {
        list: [],
    },
    reducers: {
        loadLikeList: (state, action) => {
            state.list = action.payload;
        },
    },
});

/**
 * select
 */
export const selectList = (state) => state.like.list;

/**
 * actions
 */
const { loadLikeList } = likeSlice.actions;

/**
 * APIs
 */
export const getLikeList = ({ size }) => async (dispatch) => {
    const res = await api.request(GET_BOARD, {
        method: 'get',
        params: {
            search: '01', // 좋아요 순
            size,
        },
    });
    if (res.status === 200) {
        dispatch(loadLikeList(res.data));
    } else {
        // todo 별도 에러 처리 하는 경우 여기에 작성
    }
};

export default likeSlice.reducer;
