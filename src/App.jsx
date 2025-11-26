import { useState } from "react";
import Clock from "./Clock";

function App () {
const [color, setColor] =useState("green")
  return(
    <div>
      <h1>Digital Clock in React JS</h1>
      <select onChange={(event)=> setColor(event.target.value)}>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <Clock color={color}/>
    </div>
  )
}

export default App;