import { useState } from "react";

function App () {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")

    const handleAddUsers = () => {
        setUsers([...users,user])
    }

    const total=users.length;
    const last=users[users.length-1];
    const unique =[...new Set(users)].length
    
    // console.log(users)

    return (
        <>
        <h2>Total Users : {total}</h2>
        <h2>Last Users : {last}</h2>
        <h2>Uniqe Total Users : {unique}</h2>
        <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="add new user" />
        <br /><br />
        <button onClick={handleAddUsers}>Add User</button>
        {
            users.map((item, index) => (
                <h4 key={index}>{item}</h4>
            ))
        }
        </>
        
    )
}

export default App;