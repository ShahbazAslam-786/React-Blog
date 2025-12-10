import styled from "styled-components";

function App () {

  // const Heading =styled.h1`
  // color:red;
  // border: 1px solid green;
  // border-radius: 5px;
  // margin: 20px;
  // padding: 10px;
  // `

  const Heading = styled.h1({
    color: "green",
    border: "1px solid #000",
    borderRadius: "5px",
    margin: "20px",
    padding: "10px",
    width: "200px"
  })

  const StyleBtn = styled.button `
  color: red ;
  width: 130px;
  height: 40px;
  margin: 20px;
  `

  const Para = styled.p `
  color: blue;
  `
  return (
    <>
    <h1>Styled Component With React jS</h1>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    <StyleBtn>Login</StyleBtn>
    <StyleBtn>SignUp</StyleBtn>
    <StyleBtn>Back</StyleBtn>
    <StyleBtn>Forward</StyleBtn>
     <Para>Hello Anil Sidhu</Para>
    </>
  )
}

export default App;