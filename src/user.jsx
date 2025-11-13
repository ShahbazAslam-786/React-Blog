function User({ user }) {
    // console.log(age)
    return (
        <div>
            <hr />
            <h1>User Component</h1>
            {/* <h2>{props.name}</h2> */}
            <h3>Name:{user.name}</h3>
            <h2>Age: {user.age}</h2>
            <h1>Email: {user.email}</h1>
        </div>
    )
}

export default User;