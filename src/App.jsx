import { useId } from "react";

 export default function App() {

    return (
        <>
            {/* <h1>useId Hook</h1> */}
            {/* <h1>{name}</h1>
            <h1>{password}</h1>
            <h1>{terms}</h1>
            <h1>{skills}</h1> */}

            {/* <form action="">
                <label htmlFor="name">enter user name</label>
                <input id="name" type="text" placeholder="enter name" />
            </form> */}
            <UserForm/>
            <hr />
            <UserForm/>
        </>
    )
}

function UserForm () {
    //  let name = useId()
    // let password = useId()
    // let terms = useId()
    // let skills = useId()
    let user =useId()
    return (
        <div>
         <form action="">
                <label htmlFor={user+"name"}>Enter User Name</label>
                <input id={user+"name"} type="text" placeholder="enter name" />
                <br /><br />
                <label htmlFor={user+"password"}>Enter User password</label>
                <input id={user+"password"} type="text" placeholder="enter password" />
                <br /><br />
                <label htmlFor={user+"skills"}>Enter User skills</label>
                <input id={user+"skills"} type="text" placeholder="enter skills" />
                 <br /><br />
                <label htmlFor={user+"terms"}>Terms and Condition</label>
                <input id={user+"terms"} type="checkbox" placeholder="enter terms" />
            </form>
            </div>
    )
}

 