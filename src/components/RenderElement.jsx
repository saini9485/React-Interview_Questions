// renderElementWithoutUseState and also functionality implementing 

import React from "react";
import { useState } from "react";
export function RenderElement() {
    const[search, setSearch] = useState("")
  const obj = [
    {
      name: "Rajesh",
      location: "Noida",
      age: 22,
    },
    {
      name: "Virendra",
      location: "Noida",
      age: 22,
    },
    {
      name: "Riyaj",
      location: "Noida",
      age: 22,
    },
  ];

const handleSearch = (e) =>{
 setSearch(e.target.value)
}

const searchFun = obj.filter(data =>
data.name.toLowerCase().includes(search.toLowerCase())
)
  return (
    <>
      <h1>Element</h1>
      <input type ="text" onChange={handleSearch} />
      {searchFun.map((ele,i) => {
        return (
          <>
            <p key = {i}>{ele.name}</p>
            <p key = {i}>{ele.location}</p>
            <p key = {i}>{ele.age}</p>
          </>
        );
      })}
    </>
  );
}
