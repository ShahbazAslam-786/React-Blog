import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [rcounter, setRCounter] = useState(10)
    return (
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Up date Counter</button>
            <h1>rCounter:{rcounter}</h1>
            <button onClick={() => setRCounter(rcounter - 1)}>Up date Counter</button>


        </div>
    )
}

export default Counter;