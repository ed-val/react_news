import axios from 'axios';
import API from '../api';
// the syntax below is valid and used when the father fx only
// makes a single return and the children takes a single param
export const fetchUser = () => async dispatch => {
  dispatch({ type: 'FETCH_USER' });
  try {
    const res = await axios.get('api/current_user');
    if (res) dispatch({ type: 'FETCH_USER_SUCCESS', payload: res.data });
    if (!res) dispatch({ type: 'FETCH_USER_FAIL'});
  } catch (err) {
    console.log(err);
  }
};

export const handleToken = (token) => async dispatch => {
  dispatch({ type: 'FETCH_USER' });
  try {
    const res = await axios.post('/api/stripe', token);
    if (res) dispatch({ type: 'FETCH_USER_SUCCESS', payload: res.data });
    if (!res) dispatch({ type: 'FETCH_USER_FAIL'});
  } catch (err) {
    console.log(err);
  }
};

export const landingIsActive = (value) => {
  return { type: 'LANDING_IS_ACTIVE', payload: value };
};

export const hideTopHeadlines = (value) => {
  return { type: 'USER_IS_SEARCHING', payload: value };
};

export const searchBarInputChange = (input) => {
  return { type: 'CHANGE_USER_SB_INPUT', payload: input };
};

export const resetError = () => {
  return { type: 'RESET_ERROR' };
};

export const getNewsByKeyword = (keyword, page) => async dispatch => {
  dispatch({ type: 'GET_NEWS_BY_KEYWORD' });
  try {
    const res = await API.getNewsByKeyword(keyword, page);
    if (res.error) {
      dispatch({ 
        type: 'GET_NEWS_BY_KEYWORD_FAIL', 
        payload: res.errorMsg
      });
      return;
    }

    dispatch({ 
      type: 'GET_NEWS_BY_KEYWORD_SUCCESS', 
      payload: {
        news: res.news,
        totalResults: res.totalResults,
        paginatorValues: res.paginatorValues,
      }
    });

  } catch (err) {
    console.log(err);
    dispatch({ type: 'GET_NEWS_BY_KEYWORD_FAIL'});
  }
};

export const getNewsfeed = (page) => async dispatch => {
  dispatch({ type: 'GET_NEWSFEED' });
  try {
    const res = await API.getNewsfeed(page);

    if (res.error) {
      dispatch({ 
        type: 'GET_NEWSFEED_FAIL', 
        payload: res.errorMsg
      });
      return;
    }

    dispatch({ 
      type: 'GET_NEWSFEED_SUCCESS', 
      payload: {
        news: res.news,
        totalResults: res.totalResults,
        paginatorValues: res.paginatorValues,
      }
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'GET_NEWSFEED_FAIL'});
  }
};
