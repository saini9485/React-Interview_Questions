//import { AppendCounter } from './components/AppendCounter';
// import { InterviewCounter } from './components/InterViewCounter';
// import { Counter } from './components/counter/Counter';
// import { StopWatch } from './components/StopWatch';
// import { CurrentTime } from './components/CurrentTime';
// import { UseMemoUsecallBack } from './components/UseMemoUsecallBack';
// import { UseMemo } from './components/UseMemo';
// import { Parent } from './useCallBack/Parent';
//import { CounterIncrementD } from './components/counter/counterIncrementD';
//import { Timer } from './components/timer';
// import { RenderElement } from './components/RenderElement
import { Counter1 } from './components/counter/Counter1';

import './App.css';
import { ToDo } from './components/ToDo';
import { ChildToParent } from './components/dataPassing/ChildToParent';
import { ParentToChild } from './components/dataPassing/ParentToChild';
import { Slibbling } from './components/dataPassing/Slibbling';
import { useState } from 'react';




function App() {

// passing data parent to child 
// const name = "Rajesh Saini"
// const age = 23
const [name, setName] = useState("i am in parent ")


  return (
    <div>
      <h1>{name}</h1>
      {/* <Counter /> */}
      {/* <InterviewCounter/> */}
      {/* <AppendCounter/> */}
      {/* <StopWatch/> */}
      {/* <CurrentTime/> */}
      {/* <UseMemoUsecallBack/> */}
      {/* <UseMemo/> */}
      {/* <Parent/> */}
      {/* <CounterIncrementD/> */}
      {/* <Timer/> */}
      {/* <RenderElement/> */}
      {/* <Counter1/> */}
      {/* <ToDo/> */}
     
      {/* <ParentToChild name = {name} age ={age}/>
      <Slibbling name = {name}/> */}
       { <ChildToParent name = {name} setName = {setName}/> }
    </div>


  );
}

export default App;
