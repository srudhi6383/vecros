import React from 'react';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
