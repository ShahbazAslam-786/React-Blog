// import { forwardRef } from "react"

// const UserInput = (props, ref) => {
//     return (
//         <>
//             <input type="text" ref={ref} />
//         </>
//     )
// }

// export default forwardRef(UserInput);

const UserInput = (props) => {
    return (
        <div>
            <input type="text" ref={props.ref}/>
        </div>
    )
}

export default UserInput;