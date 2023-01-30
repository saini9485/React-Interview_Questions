import React, { useCallback, useState } from 'react'
import  Child  from './Child'

export  function Parent() {
const[countOne, setCountOne] = useState(0)
const[countTwo, setCountTwo] = useState(["h"])

const handleCountOne = () =>{
    setCountOne(countOne+1)
}

const fun = useCallback(()=>{
    console.log("Callback")
},[countTwo])

  return (
    <div>
        Parent
        <Child countTwo ={countTwo} fun ={fun}/>
        <button onClick={handleCountOne}>Increment = {countOne}</button>
        </div>
  )
}
