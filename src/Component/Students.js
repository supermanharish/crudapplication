import React from 'react'
import Base from '../Base/Base'
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import { useState } from 'react';


const Students=({students, setStudents}) => { 
  const[studId, setStudId]= useState("")
  const deleteStudent = (studentId) => {
    const removedStudent =students.filter((student,idx)=>student.id !== studentId);
    setStudents(removedStudent)
  }
  return (
        <Base 
        title={"Students Info"}
        description={"All students info will be displayed here"}
        >
          <AddStudent
          students = {students}
          setStudents = {setStudents}
          />

          <EditStudent
          studId = {studId}
          students = {students}
          setStudents = {setStudents}
          />

        <div className='stud-collection'>
          {students.map((stud, idx)=>(
            <div className='stud-card' key={idx}>
               <h2>{stud.name}</h2>
               <p>Batch : {stud.batch}</p>
               <p>Gender : {stud.gender}</p>
               <p>Education : {stud.education}</p>
               <div className ='card-btn-group'>
                <button onClick={()=>setStudId(stud.id)}>Edit </button>
                <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
               </div>
            </div>
          ))}
        </div>
        </Base>
       
  )
}

export default Students



