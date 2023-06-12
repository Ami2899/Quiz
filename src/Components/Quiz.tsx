import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';
import Start from './Start';
import SignUp from './SignUp';

interface QuizProps {
  res: boolean;
  setRes: React.Dispatch<React.SetStateAction<boolean>>;
  startTimer: boolean;
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
  qnumber: number;
  setQNumber: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<(string | null)[]>>; 
  selectedOptions: (string | null)[];
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
}) => {
  const [start, setStart] = useState(true);
  const [log,setLog]=useState(false)

  return (
    <div>
    {/* {log?<SignUp/>: <></>} */}
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
    </div>
  );
};

export default Quiz;
