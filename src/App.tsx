import './App.css';
import { useState } from 'react';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Timer from './Components/Timer';
import { questions } from './Components/QuizData';

function App(): JSX.Element {
  const [res, setRes] = useState<boolean>(false);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [qnumber, setQNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(20);
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>(Array(questions.length).fill(null));

  return (
    <>
      {res ? (
        <Result
          score={score}
          setQNumber={setQNumber}
          setRes={setRes}
          setScore={setScore}
          setStartTimer={setStartTimer}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      ) : (
        <>
          <Quiz
            res={res}
            score={score}
            qnumber={qnumber}
            setScore={setScore}
            setQNumber={setQNumber}
            setRes={setRes}
            startTimer={startTimer} 
            setStartTimer={setStartTimer}
            setSeconds={setSeconds}
            seconds={seconds}
            setSelectedOptions={setSelectedOptions}
            selectedOptions={selectedOptions}
          />
          {startTimer && (
            <Timer
              setRes={setRes}
              setQNumber={setQNumber}
              seconds={seconds}
              setSeconds={setSeconds}
              qnumber={qnumber}
              questions={questions}
              setSelectedOptions={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
