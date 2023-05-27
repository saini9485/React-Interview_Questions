import React, { useEffect, useState } from 'react'
import { ChildComponent } from './ChildComponent'

export  function Interview() {
    const[counter, setCounter]= useState(10)

    // console.log("firstconsole",counter)


// useEffect (()=>{
//     console.log("consoleSecond",counter)
// })

const handleIn = () =>{
    setCounter(counter+1)
    setCounter(counter+1)  
}

// console.log("third", counter)


  return (
    <div>
        Interview
        <h1>{counter}</h1>
<ChildComponent/>
        <button onClick={ handleIn}>Update</button>
        </div>
  )
}

//first = > 0
//second => 0
//third =>0