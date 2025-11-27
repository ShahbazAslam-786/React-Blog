import College from "./College";

function App() {
  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Anil Sidhu",
          age: "29",
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: "20",
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: "25",
          email: "bruce@test.com"
        }
      ]
    },
    {
      name: "IIT Dehli",
      city: "Dehli",
      website: "www.iit.com",
      student: [
        {
          name: "Anil Sidhu",
          age: "29",
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: "20",
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: "25",
          email: "bruce@test.com"
        }
      ]
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "www.keciet.com",
      student: [
        {
          name: "Anil Sidhu",
          age: "29",
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: "20",
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: "25",
          email: "bruce@test.com"
        }
      ]
    }
  ]
  return (
    <div>
      {/* <h1>Nested Lopping With Component</h1> */}
      {
        collegeData.map((college, index) => (
          <div key={index}>
           <College college={college}/>
          </div>
        ))
      }
    </div>
  )
}

export default App;