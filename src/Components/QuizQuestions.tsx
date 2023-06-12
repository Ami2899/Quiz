import React, { useState } from 'react';
import { questions } from './QuizData';
import '../App.css';

interface QuizQuestionsProps {
  score: number;
  qnumber: number;
  seconds: number;
  startTimer: boolean;
  selectedOptions: (string | null)[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQNumber: React.Dispatch<React.SetStateAction<number>>;
  setRes: React.Dispatch<React.SetStateAction<boolean>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizQuestions: React.FC<QuizQuestionsProps> = ({
  score,
  qnumber,
  setScore,
  setQNumber,
  setRes,
  setSeconds,
  seconds,
  startTimer,
  setStart,
  setSelectedOptions,
  selectedOptions,
  setStartTimer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  function handleAnswer(isCorrect: boolean, optiontext: string | null) {
    setTimeout(() => {
      setStart(false);
      setIsAnswered(true);
      setSelectedOption(optiontext);
      if (qnumber + 1 < questions.length) {
        setQNumber(qnumber + 1);
      }
      if (qnumber + 1 === questions.length) {
        setRes(true);
      }
      if (isCorrect) {
        setScore((score) => score + 1);
      }
      setSeconds(20);

      setSelectedOptions((prevSelectedOptions) => {
        const updatedOptions = [...prevSelectedOptions];
        updatedOptions[qnumber] = optiontext;
        return updatedOptions;
      });
    }, 100);
  }

  const handleAnswerOnClick = (option: { isCorrect: boolean; optiontext: string | null }) => {
    setSelectedOption(option.optiontext);
    handleAnswer(option.isCorrect, option.optiontext);
  };

  return (
    <div className="question-card">
      <h3>Score is {score}</h3>
      <h2>
        Question {qnumber + 1} of {questions.length}
      </h2>
      <h2>{questions[qnumber].questiontext}</h2>
      <ul>
        {questions[qnumber].options.map((option) => (
          <div key={option.id}>
            <li className="answer" onClick={() => handleAnswerOnClick(option)}>
              {option.optiontext}
            </li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestions;
