import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] =useState(0)
    useEffect (() => {
        setInterval(() => {
         setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
    return (
            <h1 style={{color:color, backgroundColor:"#000", width:"189px", padding:"10px", border:"5px"}}>{time}</h1>
    )
}

export default Clock;