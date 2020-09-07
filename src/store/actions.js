import quizService from 'services/service';

export const loadQuestions = () => async (dispatch) => {
  try {
    const questions = await quizService.query();
    dispatch({ type: 'SET_QUESTIONS', payload: questions });
  } catch (err) {
    console.log(err);
  }
};

export const nextQuestion = () => (disptach) => {
  try {
    disptach({ type: 'SET_NEXT_QUESTION' });
  } catch (err) {
    console.log(err);
  }
};

export const prevQuestion = () => (disptach) => {
  try {
    disptach({ type: 'SET_PREV_QUESTION' });
  } catch (err) {
    console.log(err);
  }
};

export const selectOption = (answer) => (disptach) => {
  try {
    disptach({ type: 'SELECT_OPTION', payload: answer });
  } catch (err) {
    console.log(err);
  }
};

export const restart = () => (disptach) => {
  try {
    disptach({ type: 'RESTART' });
  } catch (err) {
    console.log(err);
  }
};
