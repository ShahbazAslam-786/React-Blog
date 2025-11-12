import { useState } from "react";
import Counter from "./Counter";

function App () {
  const [count, setCount] = useState("Apple")
  const handleFruit = () => {
       setCount("Banana")
  }
  return (
    <div>
      <h1>State In React Js</h1>
      <h1>{count}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter/>
    </div>
  )
}

export default App;