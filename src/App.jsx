import { useState } from "react"
import College from "./College"
import { SubjectContext } from "./ContextData"

export default function App () {
    const [subject, setSubject]= useState("")
    return (
        <div style={{backgroundColor:"Green", padding:10}}>
            <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
                <option value="">Select Subject</option>
                <option value="Math">Math</option>
                <option value="Urdu">Urdu</option>
                <option value="English">English</option>
                <option value="React">React</option>
            </select>
            <SubjectContext.Provider value={subject}>
            <h1>Context API</h1>
            <button onClick={()=> setSubject("")}>Clear Subject</button>
            <College/>
            </SubjectContext.Provider>
            
        </div>
    )
}
