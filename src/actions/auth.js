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
                        token: response.data.token,
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
export function signUp(data, token) {
    return dispatch => {
        dispatch({
            type: AUTH_REQUEST,
            payload: {
                request: true,
            }
        });
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/users',
            data: {
                "username": data.username,
                "password": data.password,
                "g-recaptcha-response": data.recaptcha
            },
        })
            .then(function (response) {
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: {
                        request: false,
                        username: data.username,
                        token: response.data.token,
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