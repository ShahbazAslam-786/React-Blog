const Student = ({ student }) => {
    return (
        <div>
            <h3>Students</h3>
            {
                student.map((student, index) => (
                    <ul key={index}>
                        <li>Name: {student.name}</li>
                        <li>Eamil: {student.email}</li>
                        <li>Age: {student.age}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Student;