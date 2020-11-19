import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { GET_BOARD } from '../../constants/APIs';

export const linkSlice = createSlice({
    name: 'link',
    initialState: {
        list: [],
    },
    reducers: {
        loadLinkList: (state, action) => {
            state.list = action.payload;
        },
    },
});

/**
 * select
 */
export const selectList = (state) => state.link.list;

/**
 * actions
 */
const { loadLinkList } = linkSlice.actions;

/**
 * APIs
 */
export const getLinkList = ({ size }) => async (dispatch) => {
    const res = await api.request(GET_BOARD, {
        method: 'get',
        params: {
            search: '02', // 링크 순
            size,
        },
    });
    if (res.status === 200) {
        dispatch(loadLinkList(res.data));
    } else {
        // todo 별도 에러 처리 하는 경우 여기에 작성
    }
};

export default linkSlice.reducer;
