import React, { useEffect, useState } from "react";

export function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  let interval = null;
  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const handleStart = () => {
    setStart(true);
  };

  const handleStope = () => {
    setStart(false);
  };
  const handleReset = () => {
    setTimer(0);
  };

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStope}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
