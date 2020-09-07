import React from 'react';
import { connect } from 'react-redux';

const Question = ({ questions, currentQuestion }) => {
  return (
    <div className='home__question'>
      <p>{questions[currentQuestion]?.question}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.mainApp.questions,
  currentQuestion: state.mainApp.currentQuestion,
});

export default connect(mapStateToProps, null)(Question);
