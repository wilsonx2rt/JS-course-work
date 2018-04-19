import { FETCH_QUESTIONS } from "./actionTypes";

export const fetchData = () => dispatch => {
  fetch("https://opentdb.com/api.php?amount=3")
    .then(response => response.json())
    .then(questions =>
      dispatch({
        type: FETCH_QUESTIONS,
        payload: questions
      })
    );
};
