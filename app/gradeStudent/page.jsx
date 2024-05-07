'use client'
import React, { useState, useEffect } from 'react'
import Student from '@/components/StudenClass';


const GradeStuden = () => {
  const [id, setId] = useState("")
  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    // Obtener los datos de subjects del almacenamiento local
    const storedSubjects = JSON.parse(localStorage.getItem('userFound'));

    if (storedSubjects) {
      // Si hay datos almacenados, actualiza el estado con ellos
      setSubjects(storedSubjects);
      console.log(subjects);
    }
  }, [user]);






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
    subject.addGrade(grade, selectedSubject, user) //  => return student
    localStorage.removeItem('userFound');
    alert("Subject added to " +  user[0].name + " " + user[0].lastName );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };


  const handleChange = (event) => {
    // Actualizar el estado con el valor seleccionado
    setSelectedSubject(event.target.value);
  };
  return (
    <>
      <div className='flex flex-col  justify-center items-center  w-screen'>

        {user == undefined || user == false ? (
          <div className=' flex flex-col'>
            <h1>Welcome please search a Student to grade them</h1>
            <div className='flex flex-col gap-4'>
              {/* <h1>AddSubject - Working on it....</h1> */}
              <label htmlFor="studentSearch">
                 Search Student:
                <input className='rounded m-4 p-2 bg-blue-100' required placeholder="Search by ID" id="studentSearch" name="studentSearch" type="text" value={id} onChange={e => setId(e.target.value)} />
              </label>
              <button className='text-white bg-blue-500 hover:bg-blue-400 p-4 rounded-lg hover:text-gray-200' onClick={search} >

                <span>Search</span>
              </button>
            </div>
          </div>
        ) :
          (
            <>
              {user.map((student) => (
                <div key={student.id}>
                  <h1>Welcome {student.name} {student.lastName}</h1>
                  <form className="max-w-sm mx-auto">
                    <label htmlFor="subjects" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select
                      id="subjects"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={selectedSubject}
                      onChange={handleChange}
                    >
                      <option value="">Choose a Subject to Grade</option>
                      {/* Map the subjects data to create options */}
                      {subjects.subjects == undefined || subjects.subjects == false ? (
                        <option value="" disabled> No Subjects Found</option>
                      ) : (
                        subjects.map((subject) => (
                          subject.subjects.map((subjectName, index) => (
                            <option key={`${subject.id}-${index}`} value={subjectName}>
                              {subjectName}
                            </option>
                          ))
                        ))
                      )}
                    </select>
                  </form>
                  <input type="number" name="grade" id="grade"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                  />
                </div>
              ))}
              <button className='bg-blue-400 text-white p-4 rounded-lg' onClick={handleAddSubject} >
                <span>Grade Student</span>
              </button>
            </>

          )
        }
      </div>
    </>
  );
};


export default GradeStuden