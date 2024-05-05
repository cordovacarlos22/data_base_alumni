'use client'
import React, { useState, useEffect } from 'react'
import Student from '@/components/StudenClass';

const AddSubject = () => {

  let [id, setId] = useState('')

  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userFound'));
    if (user) {
      setUser(user);
      console.log('test user ', user);
      console.log("typeof",  typeof user)
    }
  }, []);
  
  const search = () => {
    
    if (id == '') {
      alert(' please Enter a Student Id')
     
    } else {
      let studentSearch = new Student();
      let foundStudent = studentSearch.searchStudent(id) //  => return student

      console.log("foundStudent:", foundStudent); // Verifica si foundStudent tiene el valor esperado
      setUser(foundStudent); // Actualizar el estado de user con el estudiante encontrado
    }
    

  }
  return (
    <>
      <div>
        
        {user == undefined || user == false  ? (
          <>
            <h1>Welcome please search a Student</h1>
            <div>
              <h1>AddSubject - Working on it....</h1>
              <label htmlFor="studentSearch">
                Student Search:
                <input required placeholder="Search by ID" id="studentSearch" name="studentSearch" type="text" value={id} onChange={e => setId(e.target.value)} />
              </label>
              <button className='bg-white text-blue-500 p-4 rounded-lg hover:text-blue-400' onClick={search}>
                <span>Search</span>
              </button>
            </div>
          </>
        ) :
          (
            <>
              test
              {user && user.map((student) => (
                <div key={student.id}>
                  <h1>{student.id}</h1>
                  <h1>{student.name}</h1>
                  <h1>{student.lastName}</h1>
                  <h1>{student.age}</h1>
                  <h1>{student.subjects}</h1>
                </div>
              )) }
            </> 
          ) 
        }
      </div>
    </>
  );
};


export default AddSubject