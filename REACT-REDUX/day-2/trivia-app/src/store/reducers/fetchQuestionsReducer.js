import { FETCH_QUESTIONS } from '../actions/actionTypes';

const initialState = {
  questionsArray: [{
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "This movie contains the quote, &quot;What we&#039;ve got here is a failure to communicate.&quot;",
    "correct_answer": "Cool Hand Luke",
    "incorrect_answers": [
    "Bonnie and Clyde",
    "The Graduate",
    "In the Heat of the Night"
    ]
    },
    {
    "category": "Entertainment: Music",
    "type": "multiple",
    "difficulty": "hard",
    "question": "The key of G# contains how many sharps?",
    "correct_answer": "5",
    "incorrect_answers": [
    "3",
    "7",
    "0"
    ]
    },
    {
    "category": "Geography",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is the capital city of Bermuda?",
    "correct_answer": "Hamilton",
    "incorrect_answers": [
    "Santo Dominigo",
    "San Juan",
    "Havana"
    ]
    }],
}

const fetchQuestions = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_QUESTIONS: {
    //   const newState = { ...state };
    //   newState.questionsArray = action.payload.results;
    //   return newState;
    // }
    default: {
      return state;
    }
  }
}

export default fetchQuestions