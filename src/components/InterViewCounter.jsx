import React, {useState} from "react"

export  function InterviewCounter (){
  const[count, setCount] = useState(0)
 const Increament = () => {
   setCount(count+2)
 }
 const Decreament= () => {
  setCount(count-1)
}
const r = () => {
  setCount(0)
}
  return(
    <div>
      <h1>
        {count}
          </h1>
        <button onClick = {Increament}>Increment</button>
        <button onClick = {Decreament} disabled = {count==10}>Decreament</button>
        <button onClick = {r}>Reset</button>
    
    </div>
  )
}
