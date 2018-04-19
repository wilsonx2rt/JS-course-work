import { FETCH_TOKENS, FETCH_FEED } from './actionTypes';


export const fetchTokensAction = (credentials) => dispatch => {
  const url = 'http://localhost:8080/api/token/';
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }
  fetch(url, config)
    .then(response => response.json())
    .then(user => dispatch({
      type: FETCH_TOKENS,
      payload: user
    }));
};

// GET CURRENT USER FEED
export const fetchFeed = () => dispatch => {
  const parsedTokens = JSON.parse(localStorage.getItem('tokens'));
  const accessToken = parsedTokens.access;

  const url = 'http://localhost:8080/api/feed/';
  const config = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
  fetch(url, config)
    .then(response => response.json())
    .then(feed => dispatch({
      type: FETCH_FEED,
      payload: feed
    }));
}
