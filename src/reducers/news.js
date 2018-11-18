import { NEWS_REQUEST, NEWS_GET, NEWS_LOAD_FAIL} from '../actions/news';

const initialState = {
    request: false,
    error_message: '',
    feed_list: [],
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
                error_message: action.payload.error_message,
            }
        case NEWS_GET:
            return {
                ...state,
                request: action.payload.request,
                feed_list: action.payload.response_data.feeds,
                error_message: '',
            }
        default:
            return state
    }
}

export default news;