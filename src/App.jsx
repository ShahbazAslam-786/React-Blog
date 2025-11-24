function App() {
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
      age: "30",
      id: 2
    },
    {
      name: "peter",
      email: "peter@test.com",
      age: "31",
      id: 3
    },
    {
      name: "bruce",
      email: "bruce@test.com",
      age: "32",
      id: 4
    }
  ]
  return (
    <div>
      <h1>Loop In JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {

          userData.map((user) => (
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;