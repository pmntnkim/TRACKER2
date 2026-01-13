
import {
   AUTH_LOGIN_REQUEST, 
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,
    AUTH_LOGOUT,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAIL

} from '../constants/authConstant';

import axios from '../api/axios'

export const authAction = (actionType) => async (dispatch, payload) => {
    switch (actionType) {
        case 'LOGIN':
            return handleLogin(dispatch, payload);
        case 'REGISTER':
            return handleRegister(dispatch, payload);
        case 'LOGOUT':
            return handleLogout(dispatch);
        default:
            break;
    }
};

const handleLogin = async (dispatch, { email, password }) => {
    dispatch({ type: AUTH_LOGIN_REQUEST });
    try {
        const { data } = await axios.post('/auth/login/', { email, password });
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('token', data.token);
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAIL, payload: error.response?.data?.message || error.message });
    }
};

const handleRegister = async (dispatch, { email, password, password2 }) => {
    dispatch({ type: AUTH_REGISTER_REQUEST });
    try {
        const { data } = await axios.post('/auth/register/', { email, password, password2 });
        dispatch({ type: AUTH_REGISTER_SUCCESS, payload: data });
        localStorage.setItem('token', data.token);
    } catch (error) {
        dispatch({ type: AUTH_REGISTER_FAIL, payload: error.response?.data?.message || error.message });
    }
};

const handleLogout = (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: AUTH_LOGOUT });
};