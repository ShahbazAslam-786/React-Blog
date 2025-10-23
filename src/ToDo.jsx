function ToDo() {

    function callFun() {
        alert(("function called"))
    }
    return (
        <div>
            <h1>Anil Sidhu Todos</h1>
            <img src="https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg"
                alt="anil" class="Photo" width="200px" height="200px" />
            <ul>
                <li>invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum tecnology</li>
            </ul>

            <button onClick={callFun}> Click Me</button>
        </div>
    )
}

export default ToDo;