import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([])
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills([...skills.filter(item => item !== event.target.value)])
        }
    }
    return (
        <div>
            <h1>Select Your Skills</h1>
            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php">Php</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="js" value="js" />
            <label htmlFor="js">Js</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="jawa" value="jawa" />
            <label htmlFor="jawa">Jawa</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>
            <br />
            <br />
           <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Skills;