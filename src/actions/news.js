import axios from 'axios';

export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_GET = 'NEWS_GET';
export const NEWS_LOAD_FAIL = 'NEWS_LOAD_FAIL';

export function getNews () {
    return dispatch => {
        dispatch({
            type: NEWS_REQUEST,
            payload: {
                request: true,
            }
        });
        axios
            .get('http://localhost:5000/api/v1/feeds')
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({
                        type: NEWS_GET,
                        payload: {
                            request: false,
                            response_data: response.data
                        }
                    });
                }
            })
            .catch(function (error) {
                dispatch({
                    type: NEWS_LOAD_FAIL,
                    payload: {
                        error_message: error
                    }
                });
            })
    }
}