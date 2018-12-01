import history from "../history";
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';
export const REG_SUCCESS = 'REG_SUCCESS';

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
export function signUp(data) {
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
                    type: REG_SUCCESS,
                    payload: {
                        request: false,
                        token: response.data.token,
                    }
                });
                history.push('/login');
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
export function logIn(data) {
    return dispatch => {
        dispatch({
            type: AUTH_REQUEST,
            payload: {
                request: true,
            }
        });
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/auth',
            data: {
                "username": data.username,
                "password": data.password,
            },
        })
            .then(function (response) {
                const token = response.data.token;
                let id = jwt.decode(token).id
                axios({
                    method: 'get',
                    url: 'http://localhost:5000/api/v1/users/' + id,
                    headers: {
                        'content-type': 'application/json',
                        'charset': 'utf-8',
                        'x-access-token': token,
                    }
                })
                    .then(function (response) {
                        dispatch({
                            type: AUTH_SUCCESS,
                            payload: {
                                request: false,
                                username: response.data.user.displayName,
                                token: token,
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
                    })
                
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