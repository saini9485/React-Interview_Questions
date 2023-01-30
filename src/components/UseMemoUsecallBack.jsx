import React,{useMemo, useState} from 'react'


export  function UseMemoUsecallBack () {
const [random, setRandom] = useState()

let[arr, setArr] = useState([0])
const addRandom = () => {
     setRandom( Math.random().toFixed(2))
     setArr([...arr, Math.random().toFixed(2)])
   
}
  const randomM = useMemo(()=> Math.random().toFixed(2),[])
  console.log(randomM)

  return (
    <div>
        Memoziation
        {arr.map(()=>{
          return(
            <div>
             <h1>without:-{random}</h1>
                  { <h1>Memoization:-{randomM}</h1> }
                  </div>
          )
                 

        })}
   
        <button onClick={addRandom}>Add</button>
        </div>
  )
}
