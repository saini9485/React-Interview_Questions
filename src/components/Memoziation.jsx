import React,{useMemo, useState} from 'react'


export  function Memoziation() {
const [random, setRandom] = useState()
const addRandom = () => {
     setRandom([...Math.random().toFixed(2), Math.random().toFixed(2)[Math.random().toFixed(2).length-1]+1])

}
 
    
    const randomM = useMemo(()=> Math.random().toFixed(2),[])
   
    

  

  return (
    <div>
        Memoziation
        <h1>without:-{random}</h1>
        <h1>Memoization:-{randomM}</h1>
        <button onClick={addRandom}>Add</button>
        </div>
  )
}
