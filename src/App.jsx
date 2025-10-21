import { createElement } from "react";

function App () {
  const userName="Anil Sidhu"
  // let x=20
  // let y=30
  // return(
  //   <>
  //   <h1>JSX in React.jS</h1>
  //   <h1>{userName}</h1>
  //   <h1>{10+20+30}</h1>
  //   <h1>{x*y}</h1>
  //   <button onClick={()=> alert("Hello")}>Click</button>
  //   </>
  // )

  // return createElement ("div", {id:"rootDiv"}, "Hello div")

  return createElement("div", {id:"rootDiv"}, createElement("h1", {class:'h1tag'}, "Heading tag"))

  
  // return(
  //   <div className="rootOther">Hello Other</div>
  // )
}

export default App;