
import { useState } from "react";
export  function MapCounter() {
  let [count, setCount] = useState(0);
  let [arr, setArr] = useState([]);

  let handleCount = () => {
    setCount((count)=> count+ 1);
    setArr([...arr, count]);
  };

  return (
    <div>
      {arr.map((count, index) => index>=1? <span>{count}</span>:"")}
      <button
        onClick={() => {
          handleCount();
        }}
      >
        Increment
      </button>
    </div>
  );
}