import React from 'react';
import { connect } from 'react-redux';

import ProgressBar from './ProgressBar';

const Status = ({ currentQuestion, questions }) => {
  return (
    <div className='home__header'>
      <ProgressBar />
      {currentQuestion === questions.length ? (
        <h3>Done</h3>
      ) : (
        <h3>
          <span>Question {currentQuestion + 1}</span>/{questions?.length}
        </h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.mainApp.questions,
  currentQuestion: state.mainApp.currentQuestion,
});

export default connect(mapStateToProps, null)(Status);
