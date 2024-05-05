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
      <div>

        {user == undefined || user == false ? (
          <>
            <h1>Welcome please search a Student</h1>
            <div>
              <h1>AddSubject - Working on it....</h1>
              <label htmlFor="studentSearch">
                Student Search:
                <input required placeholder="Search by ID" id="studentSearch" name="studentSearch" type="text" value={id} onChange={e => setId(e.target.value)} />
              </label>
              <button className='bg-white text-blue-500 p-4 rounded-lg hover:text-blue-400' onClick={search} >

                <span>Search</span>
              </button>
            </div>
          </>
        ) :
          (
            <>
              <h1> User Found </h1>

              {/* selecion una materia desde el local storage si no existe regresar la  no existe en la base de datos
              si si existe entonces dar el input de asignar nota a estudiante */}

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
                      <option value="">Choose a Subject</option>
                      {/* Mapear los datos de subjects para crear opciones */}
                      {subjects.map((subject) => (
                        subject.subjects.map((subjectName, index) => (
                          <option key={`${subject.id}-${index}`} value={subjectName}>
                            {subjectName}
                          </option>
                        ))
                      ))}
                    </select>

                  </form>
                  <input type="number" name="grade" id="grade"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                  />
                </div>
              ))}
              <button className='bg-white text-blue-500 p-4 rounded-lg hover:text-blue-400' onClick={handleAddSubject} >

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