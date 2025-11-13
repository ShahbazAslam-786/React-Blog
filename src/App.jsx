import { useState } from "react";
import College from "./college";
import Student from "./Student";
import User from "./user";
// let name = "Anil Sidhu"

function App() {
  // let userName="Anil Sidhu"
  // let age= 29
  // let email ="anil@test.com"
  let userObjt = {
    name: "Anil Sidhu",
    age: 29,
    email: "anil@test.com"
  }
  let userObjt2 = {
    name: "Peter",
    age: 30,
    email: "peter@test.com"
  }
  let userObjt3 = {
    name: "Bruce",
    age: 32,
    email: "bruce@test.com"
  }
  let collegeName = ["IET", "DU", "IIT", "NIT", "MIT"]
  const [student, setStudent] = useState("Sam")
  return (
    <div>
      <h1>Props in React Js</h1>

      {student && <Student name={student} />}
      <button onClick={()=>setStudent("Bhasker")}>Up date Student</button>

      {/* <h1>{name}</h1> */}
      {/* <User name ={userName} age={age} email={email}/> */}
      {/* <College name={collegeName[0]} />
      <College name={collegeName[1]} />
      <College name={collegeName[2]} /> */}

      <User user={userObjt} />
      {/* <User user={userObjt2} />
      <User user={userObjt3} /> */}
      
    </div>
  )
}

export default App;