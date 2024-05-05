'use client'
import React, { useState, useEffect } from 'react'
import Student from '@/components/StudenClass';


const GradeStuden = () => {
const [id,setId] = useState("")
const [user,setUser] = useState([])

  const search = () => {

    if (id == '') {
      alert(' please Enter a Student Id')

    } else {
      let studentSearch = new Student();
      let foundStudent = studentSearch.searchStudent(id) //  => return student

      console.log("foundStudent:", foundStudent); // Verifica si foundStudent tiene el valor esperado
      setUser(foundStudent); // Actualizar el estado de user con el estudiante encontrado
    }
  };  
  
  const handleAddSubject = () => {
    let subject = new Student();
    let subjectFoundStudent = subject.addGrade(10,'math',1511) //  => return student
    // localStorage.removeItem('userFound');
    // alert("Subject added to " +  user[0].name + " " + user[0].lastName );
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
   
    console.log("foundStudent:", subjectFoundStudent); // Verifica si foundStudent tiene el valor esperado

  };

  return (
    <>
      <div>

        {user == undefined || user == false ? (
          <>
            <h1>Welcome please search a Student</h1>
            <div>
              <h1>AddSubject - Working on it....</h1>
              <label htmlFor="studentSearch">
                Student Search:
                <input required placeholder="Search by ID" id="studentSearch" name="studentSearch" type="text" value={id} onChange={e => setId(e.target.value)}  /> 
              </label>
              <button className='bg-white text-blue-500 p-4 rounded-lg hover:text-blue-400'onClick={search} >
            
                <span>Search</span>
              </button>
            </div>
          </>
        ) :
          (
            <>
              <h1> User Found </h1>
              <button className='bg-white text-blue-500 p-4 rounded-lg hover:text-blue-400'onClick={handleAddSubject} >
            
            <span>Search</span>
          </button>
            </>
          )
        }
      </div>
    </>
  );
};


export default GradeStuden