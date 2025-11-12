import { useState } from "react";
import User from "./User";

function App () {
  const [display, setDisplay]= useState(true)
  return(
    <>
    <h1>Toggle In React Js</h1>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    {
      display ? <User />: null
    }
    </>
  )
}

export default App;