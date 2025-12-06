import { useState } from "react";

function App() {

  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccc",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #ccc",
    margin: "10px"
  })

  const [textColor, setTextColor] = useState("black")
  const [grid, setGrid] = useState(true)

  const updateTheme = (bgColor, textColor) => {
    // console.log(bgColor, textColor)
    setCardStyle({ ...cardStyle, backgroundColor: bgColor })
    setTextColor(textColor)
  }
  return (
    <>
      <h1 style={{ color: "#000" }}>Dynamic Condional Style In React Js</h1>

      <button onClick={() => updateTheme("#ccc", "red")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>Default Theme</button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div style={{ display: grid ? "flex":"block", flexWrap: "wrap" }}>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>
        
        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://api.brusselstimes.com/wp-content/uploads/2019/05/vddriessche-c-stamp-media.jpg" alt="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h2>Anil Sidhu</h2>
            <p>Softwear Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;