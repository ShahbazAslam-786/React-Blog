import { useTransition } from "react";

function App () {
    const [pending, startTransition] = useTransition()

    const handleButton = () => {
        startTransition(async () => {
            await new Promise(res=> setTimeout(res,2000))
        })
    }
    return (
        <>
        <h1>useTransition hook in react js 19</h1>
        {
            pending?
            <img style={{width:"200px"}} src="src/assets/loading.webp" alt="loading" />:null
        }
        <button disabled={pending} onClick={handleButton}>Click</button>
        </>
    )
}

export default App;