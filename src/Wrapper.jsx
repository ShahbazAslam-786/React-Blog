// function Wrapper({children,color="green"}) {
//     return (
//         <div style={{ color:color, border: "5px solid green", width: "300px", margin:"10px" }}>
//            {children}
//         </div>
//     )
// }

// export default Wrapper;

function Wrapper ({children}) {
    return (
        <div style={{color:"blue", border:"3px solid green", width:"300px", margin:"10px"}}>{children}</div>
    )
}

export default Wrapper;