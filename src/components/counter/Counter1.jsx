import React, { useState } from "react"
export function Counter1 (){
    const[counter, setCounter] = useState(0)

const handleIncreament = () =>{
    setCounter(counter+1)
}
const handleDecreament = () =>{
    setCounter(counter-1)
}
    return (
        <div>
            <h1>{counter}</h1>
            <h1>Counter</h1>
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecreament} disabled = {counter==0} >Decreament</button>
        </div>
    )
}