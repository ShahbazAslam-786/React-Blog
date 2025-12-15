import User from "./User"

function App () {
    
  const displayName = (name) => {
    alert(name)
  }

    return (
        <>
        <h1>Call parent Component from child Component</h1>
        <User displayName={displayName} name={"anil"}/>
        </>
    )
}

export default App;