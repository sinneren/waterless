import history from "../history";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

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