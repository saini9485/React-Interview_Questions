import React, {  useState } from "react"

export  function CurrentTime (){
  let currentTime = new Date().toLocaleTimeString()
  let currentDate = new Date().toLocaleDateString()
const[time, setTime] = useState(currentTime)
const[date, setDate] = useState(currentDate)

 setInterval(()=>{
  currentTime = new Date().toLocaleTimeString()
  setTime(currentTime)
},1000) 


  return(
    <div>
<h1>Current Time</h1>
<h1>{time}</h1>
<h1>{date}</h1>

    </div>
  )
}
