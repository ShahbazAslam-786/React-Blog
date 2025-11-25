import User from "./user";

function App () {
  const userData = [
    {
      name: "anil",
      email: "anil@test.com",
      age: "29",
      id: 1
    },
    {
      name: "sam",
      email: "sam@test.com",
      age: "34",
      id: 2
    },
    {
      name: "peter",
      email: "peter@test.com",
      age: "20",
      id: 3
    },
    {
      name: "bruce",
      email: "bruce@test.com",
      age: "50",
      id: 4
    }
  ]
  return (
    <div>
      <h1>Reuse Component In Loop</h1>
      {
        userData.map((user) => (
          <div key={user.id}>
            <User user={user}/>
          </div>
        ))
      }
    </div>
  )
}

export default App;