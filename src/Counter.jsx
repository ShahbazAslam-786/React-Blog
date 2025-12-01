import { useEffect } from "react"

const Counter = ({ count, data }) => {

     useEffect (() => {
       console.log("Mounting Phase")
     },[])

      useEffect (() => {
       console.log("Update Phase only")
     },[count])

     useEffect(() =>{
        return() => {
            console.log("Unmounting Phase")
        }
     },[])

    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}

export default Counter;