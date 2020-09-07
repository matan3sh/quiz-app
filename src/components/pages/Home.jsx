import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadQuestions } from 'store/actions';

import { Status, Question, OptionList, Buttons, Done } from '../app';

const Home = ({ loadQuestions, questions, currentQuestion }) => {
  useEffect(() => {
    loadQuestions();
  }, [loadQuestions, questions]);

  return (
    <div className='home__wrapper'>
      {questions && (
        <>
          <Status />
          {questions.length === currentQuestion ? (
            <Done />
          ) : (
            <>
              <Question />
              <OptionList />
            </>
          )}
          <Buttons />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.mainApp.questions,
  currentQuestion: state.mainApp.currentQuestion,
});

const mapDispatchToProps = {
  loadQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
