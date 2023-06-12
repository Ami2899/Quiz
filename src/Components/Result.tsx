import React, { useState } from 'react';
import { questions } from './QuizData';
import '../App.css';

interface ResultProps {
  score: number;
  setQNumber: React.Dispatch<React.SetStateAction<number>>;
  setRes: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOptions: (string | null)[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<(string | null)[]>>;
}

const Result: React.FC<ResultProps> = ({
  score,
  setQNumber,
  setRes,
  setScore,
  setStartTimer,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function restartGame() {
    setQNumber(0);
    setRes(false);
    setScore(0);
    setStartTimer(true);
    window.location.reload();
  }

  function handleShowAnswer() {
    setShowAnswer(true);
  }

  return (
    <div className="result">
      <h3>Your Final Score is:</h3>
      <h2>
        {score} out of {questions.length} correct
      </h2>
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
      {!showAnswer && (
        <button className="restart-button" onClick={handleShowAnswer}>
          Show Answer
        </button>
      )}
      {/* {showAnswer && (
        <div className="selected-options">
          {selectedOptions.map((option, index) => (
            <div key={index}>
              <h3>Question {index + 1} : {questions[index].questiontext}</h3>
              <p>Selected Option: {option}</p>
              <p>
                Correct Option: {questions[index].options.find((opt) => opt.isCorrect)!.optiontext}
              </p>
            </div>
          ))}
        </div>
      )} */}
      {showAnswer && (
  <div className="selected-options">
    {selectedOptions.map((option, index) => {
      const isCorrect = questions[index].options.find((opt) => opt.isCorrect)?.optiontext === option;
      const optionStyle = isCorrect ? "correct-option" : "incorrect-option";

      return (
        <div key={index}>
          <h3>Question {index + 1}: {questions[index].questiontext}</h3>
          <p>Selected Option: <span className={optionStyle}>{option}</span></p>
          <p>
            Correct Option: {questions[index].options.find((opt) => opt.isCorrect)!.optiontext}
          </p>
        </div>
      );
    })}
  </div>
)}
    </div>
  );
};

export default Result;
