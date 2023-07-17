import  { useState, useEffect} from 'react';
// import React, { useState } from 'react';

function EditStudent({studId, students, setStudents})
{
    const[id, setId]=useState("")
    const[name, setName]=useState("")
    const[batch, setBatch]=useState("")
    const[gender, setGender]=useState("")
    const[education, setEducation]=useState("")

    useEffect(()=>{
        const studentData = students.find(stud=>stud.id===studId)
        if(studentData){
        setId(studentData.id)
        setName(studentData.name)
        setBatch(studentData.batch)
        setGender(studentData.gender)
        setEducation(studentData.education)
        }
    }, [studId, students])

    const updateStudent =()=>{
    const studIndex =students.findIndex((stud)=>stud.id ===studId);

    const updateStudent ={
        id,
        name,
        batch,
        gender,
        education,
    }
    // console.log(updatedStudent)

    students[studIndex]=updateStudent
    setStudents([...students])
    }


return (
    <div className="form-group">
    <h4>Edit Student</h4>

    <input 
    placeholder="Enter id of student"
    type="number"
    value={id}
    onChange={(e)=>setId(e.target.value)}
    /> 

    <input 
    placeholder="Enter name of student"
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    /> 

    <input 
    placeholder="Enter batch of student"
    type="text"
    value={batch}
    onChange={(e)=>setBatch(e.target.value)}
    />

    <input
    placeholder="Enter gender of student"
    type="text"
    value={gender}
    onChange={(e)=>setGender(e.target.value)}
    />

    <input
    placeholder="Enter education of student"
    type="text"
    value={education}
    onChange={(e)=>setEducation(e.target.value)}
    />

    <div>
    <button onClick={updateStudent}>Update Students</button>
    </div>
    </div>
)
}

export default EditStudent