import history from "../history";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';

export function startingAuthWithGA () {
    return dispatch => {
        dispatch({
            type: AUTH_REQUEST,
            payload: {
                request: true,
            }
        });
    }
}
export function authWithGA (name) {
    return dispatch => {
        dispatch({
            type: AUTH_SUCCESS,
            payload: {
                request: false,
                username: name,
            }
        });
        history.push('/');
    }
}
export function signOutWithGA() {
    return dispatch => {
        dispatch({
            type: AUTH_SIGNOUT,
            payload: {
                request: false,
                username: null,
            }
        });
        history.push('/');
    }
}
export function errorAuthGA(message) {
    return dispatch => {
        dispatch({
            type: AUTH_FAIL,
            payload: {
                request: false,
                error_message: message,
            }
        });
    }
}