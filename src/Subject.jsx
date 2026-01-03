import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export default function Subject () {
    const subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor:"royalblue"}}>
            <h3>Subject is : {subject}</h3>
        </div>
    )
}