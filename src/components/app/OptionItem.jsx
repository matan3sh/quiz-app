import React from 'react';
import { connect } from 'react-redux';
import { selectOption } from 'store/actions';

const OptionItem = ({
  option,
  selectOption,
  answer,
  answers,
  currentQuestion,
}) => {
  const onSelectOption = () => {
    let updatedAnswers = [...answers];
    if (updatedAnswers[currentQuestion] === undefined)
      updatedAnswers.push(answer);
    else updatedAnswers[currentQuestion] = answer;
    selectOption(updatedAnswers);
  };

  return (
    <div
      className={`home__option ${
        answers[currentQuestion] === answer ? 'active' : ''
      }`}
      onClick={onSelectOption}
    >
      <p>{option}</p>
      <span>
        <i className='fas fa-check-circle'></i>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  answers: state.mainApp.answers,
  currentQuestion: state.mainApp.currentQuestion,
});

const mapDispatchToProps = {
  selectOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionItem);
