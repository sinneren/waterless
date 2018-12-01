
import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS, AUTH_SIGNOUT, REG_SUCCESS } from '../actions/auth';

const initialState = {
    request: false,
    error_message: '',
    username: null,
    token: null,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                request: action.payload.request,
                error_message: '',
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                request: action.payload.request,
                error_message: '',
            }
        case AUTH_FAIL:
            return {
                ...state,
                request: action.payload.request,
                error_message: action.payload.error_message,
            }
        case AUTH_SIGNOUT:
            return {
                ...state,
                username: null,
                token: null,
                request: action.payload.request,
                error_message: '',
            }
        case REG_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                request: action.payload.request,
                error_message: '',
            }
        default:
            return state
    }
}

export default auth;