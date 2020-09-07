const initialState = {
  questions: null,
  currentQuestion: 0,
  answers: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
      };
    case 'SET_NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case 'SET_PREV_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      };
    case 'SELECT_OPTION':
      return {
        ...state,
        answers: [...action.payload],
      };
    case 'RESTART':
      return {
        ...state,
        currentQuestion: 0,
        questions: [],
        answers: [],
      };
    default:
      return state;
  }
}
