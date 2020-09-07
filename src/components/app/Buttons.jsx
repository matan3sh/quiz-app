import React from 'react';
import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, restart } from 'store/actions';

const Buttons = ({
  currentQuestion,
  nextQuestion,
  prevQuestion,
  questions,
  restart,
}) => {
  return (
    <div className='home__buttons'>
      {questions.length === currentQuestion ? (
        <button onClick={() => restart()}>Restart</button>
      ) : (
        <>
          {' '}
          {!currentQuestion ? (
            <button className='disabled-button'>Previous</button>
          ) : (
            <button onClick={() => prevQuestion()}>Previous</button>
          )}
          <button onClick={() => nextQuestion()}>
            {currentQuestion !== questions.length - 1 ? 'Next' : 'Done'}
          </button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentQuestion: state.mainApp.currentQuestion,
  questions: state.mainApp.questions,
});

const mapDispatchToProps = {
  nextQuestion,
  prevQuestion,
  restart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
