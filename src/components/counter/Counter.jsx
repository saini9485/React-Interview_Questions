import React, {useState} from "react"
export function Counter (){
  const [count, setCount] = useState(0)
  const handleCount = () =>{
    setCount(count+1)
    if(count =="10"){
            setCount("Rajesh")
    }  
  }
  return(
<div>
<h1>
  count:{count}
  </h1>
  <button onClick ={handleCount}> count</button>
</div>
  )
}