import React from 'react'

export  function ParentToChild({name,age}) {

  return (
    <div>
        Child Component
        <h1>{name} and age {age}</h1>
        </div>
  )
}
