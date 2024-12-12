const Result = ({ answers, questions }) => {
  const totalQuestions = questions.length;
  const correctAnswers = answers.filter((answer, index) => {
    const correctAnswer = questions[index].correctAnswer;

    if (Array.isArray(correctAnswer)) {
      return answer.sort().join(',') === correctAnswer.sort().join(',');
    }
    return answer === correctAnswer;
  }).length;

  return (
    <div className="result">
      <h2>Quiz Results</h2>
      <p>
        You answered {correctAnswers} out of {totalQuestions} questions correctly!
      </p>
    </div>
  );
};

export default Result;