import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { API_SIGN_UP, API_SIGN_IN, API_SIGN_OUT } from "../../constants/APIs";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        isSignIn: false,
        userToken: ''
    },
    reducers: {
        loadUsers: (state, action) => {
            state.list = action.payload;
        },
        auth: (state, action) => {
            state.userToken = action.payload.userToken;
            state.isSignIn = action.payload.isSignIn;
        },
    },
});

/**
 * select
 */
export const selectList = state => state.users.list;
export const selectIsSignIn = state => state.isSignIn;
export const selectUserToken = state => state.userToken;

/**
 * actions
 */
const {
    loadUsers,
    auth
} = usersSlice.actions;

/**
 * APIs
 */
export const getUsers = () => async (dispatch) => {
    const res = await api.request(
        'http://dummy.restapiexample.com/api/v1/employees',
        {
            method: 'get',
            params: {},
        }
    );
    if (res.status === 'success') {
        dispatch(loadUsers(res.data));
    } else {
        // todo 별도 에러 처리 하는 경우 여기에 작성
    }
};

export const postSignUp = data => async (dispatch) => {
    const res = await api.request(API_SIGN_UP(), {
        method: 'post',
        params: {},
        data
    });
    if (res.user_token) {
        // dispatch(signUp)
    }
};

// TODO: SIGN IN, SIGN OUT 로직 확인.. user_token 받는 위치, 전달하는 위치 확인 #
export const signIn = data => async (dispatch) => {
    const user_token = data.user_token
    const res = await api.request(API_SIGN_IN(user_token), {
        method: 'get',
        params: {},
        data
    });
    if (res.result === 'Success') {
        dispatch(auth({userToken: user_token, isSignIn: true}))
    }
    else {

    }
};

export const signOut = data => async (dispatch) => {
    const res = await api.request(API_SIGN_OUT(), {
        method: 'get',
        params: {},
        data
    });
    if (res.result === 'Success') {
        dispatch(auth({userToken: '', isSignIn: false}))
    }
    else {

    }
};

export default usersSlice.reducer;
