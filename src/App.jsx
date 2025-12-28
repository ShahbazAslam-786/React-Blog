import { useState } from "react";

function App() {
    // const [name, setName] = useState("anil")
    const [data, setData] = useState([
        "anil", "sam", "peter", "tony"
    ])

    const [dataDetails, setDataDetails] = useState([

        { name: "anil", age: "29" },
        { name: "sam", age: "25" },
        { name: "peter", age: "33" },
    ])

    const handleUser = (name) => {
        //  console.log(name)
        // setData([name])

        data[data.length - 1] = name
        // console.log(data)
        setData([...data])
    }

    const handleAge = (age) => {
        //  console.log(name)
        // setData([name])

        dataDetails[dataDetails.length - 1].age = age
        // console.log(data)
        setDataDetails([...dataDetails])
    }

    return (
        <>
            <h1>Update Array in State</h1>
            {/* <h2>{name}</h2> */}
            {/* <button onClick={() => setName("Anil Sidhu")}>Update name</button> */}

            <input type="text" placeholder="enter last user name" onChange={(e) => handleUser(e.target.value)} />
            <br /><br />
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h3>
                            {item}
                        </h3>
                    </div>
                ))
            }

            <hr />

            <input type="text" placeholder="enter last user age" onChange={(e) => handleAge(e.target.value)} />
            {
                dataDetails.map((item,index) => (
                    <h4 key={index}>{item.name}, {item.age}</h4>
                ))
            }
        </>
    )
}

export default App;