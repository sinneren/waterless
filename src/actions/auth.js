import history from "../history";
import axios from 'axios';

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
export function authWithGA (name, token) {
    return dispatch => {
        axios.post('http://localhost:5000/api/v1/auth/google', {
            token: token
        })
            .then(function (response) {
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: {
                        request: false,
                        username: name,
                    }
                });
                history.push('/');
            })
            .catch(function (error) {
                dispatch({
                    type: AUTH_FAIL,
                    payload: {
                        request: false,
                        error_message: error,
                    }
                });
            });
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