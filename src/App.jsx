import { useState } from "react";

function App() {

    const [data, setData] = useState({
        name: "anil",
        adress: {
            city: "gurgaon",
            country: "India"
        }
    })

    const handleName = (val) => {
        //    console.log(val)
        data.name = val
        setData({ ...data })
    }

    const handleCity = (city) => {
        //   console.log(city)
        data.adress.city = city
        setData({ ...data, adress: { ...data.adress, city } })
    }

    const handleCountry = (country) => {
        // console.log(country)
        data.adress.country = country
        setData({ ...data, adress: { ...data.adress, country } })
    }
    return (
        <>
            <h1>Update objects in state</h1>
            <input type="text" placeholder="Update name" onChange={(event) => handleName(event.target.value)} />
            <br /><br />
            <input type="text" placeholder="Update city" onChange={(event) => handleCity(event.target.value)} />
            <br /><br />
            <input type="text" placeholder="Update country" onChange={(event) => handleCountry(event.target.value)} />

            <h2>Name : {data.name}</h2>
            <h2>City : {data.adress.city}</h2>
            <h2>Country : {data.adress.country}</h2>
        </>
    )
}

export default App;