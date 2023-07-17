import React, { useState } from 'react';


function AddStudent({students, setStudents}){
    const[id, setId]= useState("")
    const[name, setName]= useState("")
    const[batch, setBatch]= useState("")
    const[gender, setGender]= useState("")
    const[education, setEducation]= useState("")


    const handleAddstudent=() => {
        const newStudent ={
             id,
             name,
             batch,
             gender,
             education
        }
        // console.log(newStudent)
        setStudents([...students, newStudent])
        setId("")
        setName("")
        setBatch("")
        setGender("")
        setEducation("")
    }

    return (
        <div className="form-group">
        <h4>Add Student</h4>
        <input 
        placeholder="Enter Id of Student"
        type="number"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        /> 
        
        <input 
        placeholder="Enter Name of Student"
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        /> 

        <input 
        placeholder="Enter Batch of Student"
        type="text"
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />

        <input
        placeholder="Enter Gender of Student"
        type="text"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />

        <input
        placeholder="Enter Education of Student"
        type="text"
        value={education}
        onChange={(e)=>setEducation(e.target.value)}
        />
        <div>
        <button onClick={handleAddstudent}>Add Students</button>
        </div>
        </div>
    )
}

export default AddStudent