import React from 'react';
import { connect } from 'react-redux';

const ProgressBar = ({ questions, currentQuestion }) => {
  const length = questions.length;
  const style = {
    opacity: 1,
    width: `${(currentQuestion * 100) / length}%`,
  };
  return (
    <div className='progress'>
      {currentQuestion > 0 && (
        <div className='progress-done' style={style}>
          {((currentQuestion * 100) / length).toFixed(0)}%
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.mainApp.questions,
    currentQuestion: state.mainApp.currentQuestion,
  };
};

export default connect(mapStateToProps, null)(ProgressBar);
