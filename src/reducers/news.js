const news = (state = [], action) => {
    switch (action.type) {
      case 'NEWS_REQUEST':
        return [
          ...state,
          {
            request: true,
          }
        ]
      case 'NEWS_FAIL':
        return [
            ...state,
            {
                request: false,
                error_message: 'Some faile',
            }
        ]
      default:
        return state
    }
  }
  
  export default news