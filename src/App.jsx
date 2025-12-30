import { useActionState } from "react";

function App() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get("name")
        let password = formData.get("password")
        await new Promise(res => setTimeout(res, 2000))
        // console.log("hadleSubmit Called", name, password)

        if (name && password) {
            return { message: "Data Submited", name, password }
        } else {
            return { error: "Failde to Submit, Enter proper data", name, password }
        }
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined)
    console.log(data)
    return (
        <>
            <h1>useActionState hook in React js</h1>
            <form action={action}>
                <input type="text" defaultValue={data?.name} placeholder="enter name" name="name" />
                <br /><br />
                <input type="text" defaultValue={data?.password} placeholder="enter password" name="password" />
                <br /><br />
                <button disabled={pending}>Submit data</button>
            </form>
                <br />

            {
                data?.error && <span style={{ color: "red" }}>{data?.error}</span>
            }
            {
                data?.message && <span style={{ color: "blue" }}>{data?.message}</span>
            }

            <h3>Name :{data?.name}</h3>
            <h3>Password :{data?.password}</h3>
        </>
    )
}

export default App;