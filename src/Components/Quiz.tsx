import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';
import Start from './Start';
import SignUp from './SignUp';

interface QuizProps {
  res: boolean;
  setRes: React.Dispatch<React.SetStateAction<boolean>>;
  startTimer: boolean;
  islog:boolean
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
  qnumber: number;
  setQNumber: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<(string | null)[]>>; 
  selectedOptions: (string | null)[];
  setLog:React.Dispatch<React.SetStateAction<boolean>>
}

const Quiz: React.FC<QuizProps> = ({
  res,
  setRes,
  startTimer,
  setStartTimer,
  qnumber,
  setQNumber,
  score,
  setScore,
  seconds,
  setSeconds,
  setSelectedOptions,
  selectedOptions,
  islog,
  setLog
}) => {
  const [start, setStart] = useState(true);
  
  const handleSignIn = () => {
    setLog(false);
  }

  return (
    <div>
    {islog?<SignUp onSignIn={handleSignIn}/>: 
    <>
        {start ? (
        <Start setStartTimer={setStartTimer} setStart={setStart} />
      ) : (
        <QuizQuestions
          score={score}
          qnumber={qnumber}
          setScore={setScore}
          setQNumber={setQNumber}
          setRes={setRes}
          setSeconds={setSeconds}
          seconds={seconds}
          startTimer={startTimer}
          setStart={setStart}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
          setStartTimer={setStartTimer}
        />
      )}
    </>
    }
    </div>
  );
};

export default Quiz;
