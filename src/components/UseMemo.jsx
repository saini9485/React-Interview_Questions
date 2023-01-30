
import React, { useMemo, useState } from "react"

export function  UseMemo (){
  const[countOne, setCountOne] = useState(0)
  const[countTwo, setCountTwo] = useState(0)

const handleCountOne = () =>{
  setCountOne(countOne+1)
}

const handleCountTwo = () =>{
  setCountTwo(countTwo+1)
}

//without memoization
// const isEven = () =>{
//   console.log("hhhhh")
//   let i=0;
//   while(i<20000000) i++;
//   return countOne%2===0
// }


//with memoization 
const isEven = useMemo(() =>{
  console.log("hhhhh")
  let i=0;
  while(i<200000000) i++;
  return countOne%2===0
 
},[countOne])


  return (
    <div>
      <h1>
        memoizaion
      </h1>
      <button onClick = {handleCountOne}>CountOne = {countOne}</button>
      <span>{isEven?"Even":"Odd"}</span>
      <button onClick = {handleCountTwo}>CountTwo = {countTwo}</button>
    </div>
  )
}

