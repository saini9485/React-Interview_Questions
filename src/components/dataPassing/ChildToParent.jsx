import React from "react";

export function ChildToParent({ setName }) {
  return (
    <>
      <h5> child to parent </h5>
      <button onClick={() => setName("i am coming from child")}>Click</button> 
    </>
  );
}
