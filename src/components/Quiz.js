import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';
import Result from './Result';
import ProgressBar from './ProgressBar';

const Quiz = ({ quizzes }) => {
  const { id } = useParams();
  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <h2>{quiz.title}</h2>
          <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={quiz.questions.length} />
          <Question question={currentQuestion} onAnswer={handleAnswer} />
        </>
      ) : (
        <Result answers={userAnswers} questions={quiz.questions} />
      )}
    </div>
  );
};

export default Quiz;