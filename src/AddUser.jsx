
function AddUser ({setUser}) {
    return (
        <>
        <h1>Add User</h1>
        <input type="text" placeholder="Enter User name" onChange={(event) => setUser(event.target.value)}/>
        <hr />
        </>
    )
}

export default AddUser;