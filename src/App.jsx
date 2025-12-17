import { useState } from "react";

function App () {

    const [pending, setPending] = useState(false)
    const handleButton = async() =>{
        // console.log("Hello umar Sajid")
        setPending(true)
       await new Promise(res => setTimeout(res, 2000))
        //

        setPending(false)
    }
    return (
        <>
        <h1>useTransition hook in React js 19</h1>
        <button disabled={pending} onClick={handleButton}>Clikc</button>
        </>
    )
}

export default App;