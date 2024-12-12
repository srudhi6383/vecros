import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAnswerChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="question">
      <p>{question.question}</p>
      {question.type === 'single' && (
        <div className="options-column">
          {question.options.map((option, index) => (
            <button key={index} onClick={() => onAnswer(option)} className="option-btn">
              {option}
            </button>
          ))}
        </div>
      )}
      {question.type === 'multiple' && (
        <div className="options-column">
          {question.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleAnswerChange(option)}
              />
              {option}
            </label>
          ))}
          <button onClick={() => onAnswer(selectedOptions)} className="submit-btn">
            Submit Answers
          </button>
        </div>
      )}
      {question.type === 'truefalse' && (
        <div className="options-column">
          {question.options.map((option, index) => (
            <button key={index} onClick={() => onAnswer(option)} className="option-btn">
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;