import Student from "./Student";

const College = ({college}) => {
    return (
        <div
        style={{
            backgroundColor: "#ccc",
            padding: "20px",
            margin: "20px",
            borderBottom: "2px solid #000",
            borderRadius: "2px"
        }}
        >
            <h1>Name: {college.name}</h1>
            <ul>
                <li>
                    <h3>City: {college.city}</h3>
                </li>
                <li>
                    <h3>Website: {college.website}</h3>
                </li>
                <li>
                    <Student student={college.student}/> 
                </li>
            </ul>
        </div>
    )
}

export default College;