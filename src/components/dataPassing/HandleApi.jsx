import React, { useEffect, useState } from "react";
import axios from "axios";
export function HandleApi() {
  const [data, setData] = useState("");

//   useEffect(() => {
//     const getData = async() => {
//       const res = await axios.get("https://saurav.tech/NewsAPI/everything/cnn.json");
//       console.log("data",res.data)
//       setData(res.data.articles);
//     };
//     getData();
//   }, []);

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


  return(

     <div>
        HandleApi
        {obj.map((item)=>{
            return(
                <>
                <h1>{item.name}</h1>
                </>
            )
        })}
        </div>
  )
}
