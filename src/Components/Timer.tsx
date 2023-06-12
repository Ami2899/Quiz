import React, { useEffect } from 'react';
import '../App.css';

interface TimerProps {
    setRes: React.Dispatch<React.SetStateAction<boolean>>;
    setQNumber: React.Dispatch<React.SetStateAction<number>>;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    qnumber: number;
    questions: { id: number; questiontext: string; options: { id: number; optiontext: string; isCorrect: boolean }[] }[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<(string | null)[]>>;
    selectedOptions: (string | null)[];
}

const Timer: React.FC<TimerProps> = ({
    setRes,
    setQNumber,
    seconds,
    setSeconds,
    qnumber,
    questions,
    setSelectedOptions,
    selectedOptions,
}) => {
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }

      if (seconds === 0) {
        if (qnumber < questions.length - 1) {
          setQNumber((prevQNumber) => prevQNumber + 1);
          setSeconds(20);
        } else {
          setRes(true);
        }
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [seconds, setQNumber, setRes, setSeconds, qnumber, questions.length]);

  return (
    <h3 className="time">
      Time Left - 00 : {seconds < 10 ? `0${seconds}` : seconds}
    </h3>
  );
};

export default Timer;
