
import {
   AUTH_LOGIN_REQUEST, 
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,
    AUTH_LOGOUT,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAIL

} from '../constants/authConstant';


export const authReducer = (state = { user: null, token: null }, action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
        case AUTH_REGISTER_REQUEST:
            return { loading: true, user: null, token: null };
        
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTER_SUCCESS:
            return { loading: false, user: action.payload.user, token: action.payload.token };
        
        case AUTH_LOGIN_FAIL:
        case AUTH_REGISTER_FAIL:
            return { loading: false, error: action.payload, user: null, token: null };
        
        case AUTH_LOGOUT:
            return { user: null, token: null };
        
        default:
            return state;
    }
};