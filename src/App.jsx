import { useRef } from "react";
import UserInput from "./Userinput"

function App () {

    const inputRef = useRef(null)

    const updateInput = () => {
        // console.log("hello")
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color= "red"
    }
    return (
        <>
        <h1>Forward Ref</h1>
        <UserInput ref={inputRef}/>
        <button onClick={updateInput}>Update Input Field</button>
        </>
    )
}

export default App;