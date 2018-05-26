import {
  FETCH_TOKENS,
  FETCH_FEED,
  FETCH_CURRENT_USER_PROFILE
} from "./actionTypes";
import store from "../index";

export const fetchTokensAction = credentials => dispatch => {
  const url = "http://localhost:8080/api/token/";
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  };
  return fetch(url, config)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(user =>
      dispatch({
        type: FETCH_TOKENS,
        payload: user
      })
    );
  console.log("Login Success");
};

// // VERIFY TOKEN
// const verifyToken = (token) => {
//   const parsedTokens = JSON.parse(localStorage.getItem('tokens'));
//   const accessToken = parsedTokens.access;
//   const refreshToken = parsedTokens.refresh;

//   const url = 'http://localhost:8080/api/token/verify/';
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({token: token})
//   }

//   // REFESH CONFIG
//   const refreshURL = 'http://localhost:8080/api/token/refresh/';
//   const refreshConfig = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({refresh: token})
//   }

//   fetch(url, config)
//     .then(response => {
//       if (response.status === 401 && token === accessToken) {
//         verifyToken(refreshToken);
//       } else if (response.status === 401 && token === refreshToken) {
//         console.log("log in again");
//         // redirect to login
//       } else if (response.status === 200) {
//         fetch(refreshURL, refreshConfig)
//         .then(response => response.json())
//         .then(data => console.log(data))
//       }
//     })
//     // .then(data => console.log(data));
// }

// GET CURRENT USER FEED
export const fetchFeed = () => dispatch => {
  const parsedTokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = parsedTokens.access;

  const url = "http://localhost:8080/api/feed/";
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  fetch(url, config)
    .then(
      response =>
        response.json() /*{
      if (response.status === 401) {
        verifyToken(accessToken);
        // console.log(newToken);
      } else {
        return response.json();
      }
    }*/
    )
    .then(feed =>
      dispatch({
        type: FETCH_FEED,
        payload: feed
      })
    );
};

// GET CURRENT USER PROFILE
export const fetchCurrentUserProfile = () => (dispatch, getState) => {
  const accessToken = console.log(getState());
  console.log(accessToken);
  const url = "http://localhost:8080/api/me/";
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  // fetch(url, config)
  //   .then(response => {
  //     console.log(response);
  //     return response;
  //   })
};
