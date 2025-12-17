import { useFormStatus } from "react-dom"

function App () {
    const handleForm = async() => {
        await new Promise (res=> setTimeout(res,2000))
        console.log("Submit")
    }

    function CustomerForm () {
        const {pending} = useFormStatus();
        console.log(pending)
        return (
            <div>
                <input type="text" placeholder="enter name" />
                <br /><br />
                <input type="text" placeholder="enter password" />
                <br /><br />
                <button disabled={pending}>{pending? "Submiting...": "Submit"}</button>
            </div>
        )
    }
    return (
        <>
        <h1>useFormStatus hook in react js</h1>
        <form action={handleForm}>
          <CustomerForm/>
        </form>
        </>
    )
}

export default App;