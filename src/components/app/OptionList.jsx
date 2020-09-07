import React from 'react';
import { connect } from 'react-redux';

import OptionItem from './OptionItem';

const OptionList = ({ questions, currentQuestion }) => {
  return (
    <div className='home__options'>
      {questions[currentQuestion].options.map((option, index) => (
        <OptionItem option={option} key={index} answer={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.mainApp.questions,
  currentQuestion: state.mainApp.currentQuestion,
});

export default connect(mapStateToProps, null)(OptionList);
