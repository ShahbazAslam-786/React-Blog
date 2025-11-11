import { useState, useContext, useEffect, useId } from "react"

function App () {
  let Fruit = "Apple"
  const handleFruit = () => {
    Fruit= "Banana"
    console.log(Fruit)
  }
  return (
    <div>
      <h1>State In React Js</h1>
      <h1>{ Fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
    </div>
  )
}

export default App;