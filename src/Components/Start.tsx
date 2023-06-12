import React from 'react';

interface StartProps {
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Start: React.FC<StartProps> = ({ setStartTimer, setStart }) => {
  function startQuiz() {
    setStartTimer(true);
    setStart(false);
  }

  return (
    <div>
      <button className="start-button" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
