function User ({displayName, name,getUser}) {

    // const name="Anil"
    return (
     <div>
        <button onClick={()=>displayName(name)}>Display Name</button>
        <button onClick={()=>getUser()}>Get user </button>
     </div>
    )
}

export default User;