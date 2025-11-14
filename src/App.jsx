import User from "./user";
import Wrapper from "./wrapper";

function App() {
  return (
    <div>
      <h1>Props In React Js</h1>
      <Wrapper color="orange">
        <h1>Hello Everyone</h1>
      </Wrapper>

      <Wrapper color="blue">
        <h1>Hello Anil</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Admin</h1>
        <h1 style={{color:"red"}}>Please Login</h1>
      </Wrapper>

      {/* <User name="Anil Sidhu" />
      <User name="Sam" />
      < User name="Bhaskar"/>
      < User/>
      < User/> */}
    </div>
  )
}


export default App;