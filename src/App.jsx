let count=0
function App () {
    console.log('in app----', count)
    return (
        <>
        <h1>Keeping Component pure</h1>
        <Counter count={2}/>
        <Counter count={2}/>
        <Counter count={2}/>
        <Counter count={2}/>
        </>
    )
}

function Counter () {
    count=count +1;
    console.log('in counter count----------', count)
    return(<><h1>Counter {count}</h1></>)
}

export default App;