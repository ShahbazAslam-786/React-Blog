import UserProfile from "./userProfile";
// import "./Css/style.css";

function App() {
  return (
    <>
      <h1 className="heading">Style With Css Module In React jS</h1>
      <div style={{display:"flex", flexWrap: "wrap"}}>
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </>
  )
}

export default App;