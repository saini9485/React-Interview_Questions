import React, { useState } from "react";
export function CounterIncrementD() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
    setCounter("Increment");
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setCounter("Decrement");
  };

  const handleReset = () => {
    setCount(0);
    setCounter("Reset");
  };
  
  return (
    <>
      <h1>
        {" "}
        {counter} {count}{" "}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
