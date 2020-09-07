import React from 'react';
import { connect } from 'react-redux';

const Done = ({ answers, questions }) => {
  const onDone = () => {
    let totalScore = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === questions[i].answer) {
        totalScore += 100 / answers.length;
      }
    }
    return totalScore;
  };
  return (
    <div className='done'>
      <h2>Your Score is {onDone()}</h2>
      <i className='fas fa-trophy fa-2x'></i>
    </div>
  );
};

const mapStateToProps = (state) => ({
  answers: state.mainApp.answers,
  questions: state.mainApp.questions,
});

export default connect(mapStateToProps, null)(Done);
