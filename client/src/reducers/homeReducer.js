const INITIAL_STATE = {
  loading: false,
  requestError: false,
  errorMessage: '',
  news: [],
  paginatorValues: [],
  totalResults: 0,
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case 'RESET_ERROR': {
      return { ...state, requestError: false };
    }
    case 'GET_NEWSFEED': {
      return { ...state, loading: true, errorMessage: '', requestError: false };
    }
    case 'GET_NEWSFEED_FAIL': {
      return { 
        ...state, 
        loading: false, 
        errorMessage: payload, 
        requestError: true,
      };
    }
    case 'GET_NEWSFEED_SUCCESS': {
      return { 
        ...state, 
        loading: false,
        news: payload.news,
        totalResults: payload.totalResults,
        paginatorValues: payload.paginatorValues,
        errorMessage: '', 
        requestError: false,
      };
    }
    case 'GET_NEWS_BY_KEYWORD': {
      return { ...state, loading: true, errorMessage: '', requestError: false };
    }
    case 'GET_NEWS_BY_KEYWORD_FAIL': {
      return { 
        ...state, 
        loading: false, 
        errorMessage: payload, 
        requestError: true,
      };
    }
    case 'GET_NEWS_BY_KEYWORD_SUCCESS': {
      return { 
        ...state, 
        loading: false,
        news: payload.news,
        totalResults: payload.totalResults,
        paginatorValues: payload.paginatorValues,
        errorMessage: '', 
        requestError: false,
      };
    }
    default:
      return state;
  }
}
