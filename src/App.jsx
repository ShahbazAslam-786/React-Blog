import { useState } from "react"

function App () {
  const [val, setVal] = useState("")
  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter User Name" />
      <h1>{val}</h1>
      <button onClick={()=> setVal("")}>Clear Value</button>
    </div>
  )
}

export default App;