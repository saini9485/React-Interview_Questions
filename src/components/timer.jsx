import { useState, useEffect } from "react";

export  function Timer () {
  const [time, setTime] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setTime((prevtime) => prevtime + 1);
    }, 1000);
    return () => clearInterval(timer);
  });
  const stopTimer = () => {
    clearInterval(timer);
  };

  const startTimer = () =>{
    setTime(time+1)
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}


