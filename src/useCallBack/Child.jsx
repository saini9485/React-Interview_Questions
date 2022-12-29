import React,{memo} from 'react'

 function  Child({countTwo, fun}) {

console.log("child Component")
  return (
    <div>Child
        {countTwo}
        {fun}
    </div>
  )
}

export default memo(Child)