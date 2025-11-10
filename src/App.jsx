function App() {
  function callFun() {
    alert("function called")
  }

  function Fruit (name) {
    alert(name)
  }
  return (
    <div>
      <h1>Event Function Call</h1>
      <button onClick={()=>Fruit("apple")}>Apple</button>
      <button onClick={()=>Fruit("banana")}>Banana</button>
    </div>
  )
}

export default App;