import { NEWS_REQUEST, NEWS_GET, NEWS_LOAD_FAIL, NEWS_DETAIL_LOAD_SUCCESS, NEWS_DELETE_SUCCESS } from '../actions/news';

const initialState = {
    request: false,
    error_message: '',
    feed_list: [],
    status: 200,
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                request: action.payload.request,
                error_message: '',
            }
        case NEWS_LOAD_FAIL:
            return {
                ...state,
                request: action.payload.request,
                status: action.payload.status,
                error_message: action.payload.error_message,
            }
        case NEWS_GET:
            return {
                ...state,
                request: action.payload.request,
                feed_list: action.payload.response_data.feeds,
                error_message: '',
            }
        case NEWS_DETAIL_LOAD_SUCCESS:
            return {
                ...state,
                request: action.payload.request,
                status: 200,
                feed_item: action.payload.response_data.feed,
                error_message: '',
            }
        case NEWS_DELETE_SUCCESS:
            return {
                ...state,
                request: action.payload.request,
                error_message: '',
            }
        default:
            return state
    }
}

export default news;