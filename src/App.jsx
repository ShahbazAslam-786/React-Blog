function App() {

  // const name = "Anil Sidhu"
  const name = "peter"
  const userObjt = {
    name: "Anil sidhu",
    Email: "anil@test.com",
    age: "22"
  }

  const userArray = ["same", "peter", "burce"]
  let x = 10
  let y = 20
  let path = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"

  function fruit() {
    return "Apple"
  }

  function Sum(a, b) {
    return a + b
  }

  function Oppertion(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else if (op == "*") {
      return a * b
    }
  }
  return (
    <div>
      <h1>JSX With Curly Braces</h1>
      <h1>{name ? name : "User not found"}</h1>
      <h1>{x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>{Sum(10, 100)}</h1>
      <h1>{Oppertion(20, 10, "*")}</h1>
      <h1>{userObjt.Email}</h1>
      <h1>{userArray[2]}</h1>
      <input type="text" value={name} id={name} />
      <br/>
      <img src={path} alt=""  />
    </div>
  )
}

export default App;