import React, { useState } from "react";

export function AppendCounter() {
  const [count, setCount] = useState([0]);

  const handleIncrement = () => {
    setCount([...count, count[count.length - 1] + 1]);
  };

  
  const handleDecrement = () => {
    setCount([...count.slice(0, count.length - 1)]);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count == 0}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
