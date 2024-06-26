'use client'
import React, { useState, useEffect } from 'react'
import Student from '@/components/StudenClass';

const AddSubject = () => {

  /* The line `let [id, setId] = useState('')` in the code snippet is using the `useState` hook from
  React to declare a state variable named `id` and a function to update that state variable named
  `setId`. */
  let [id, setId] = useState('')

  /* The line `const [user, setUser] = useState([]);` in the code snippet is using the `useState` hook
  from React to declare a state variable named `user` and a function to update that state variable
  named `setUser`. The initial value of the `user` state variable is set to an empty array `[]`. This
  state variable is used to store and update the user data retrieved from the local storage. When the
  component mounts, it checks if there is any user data stored in the local storage and updates the
  `user` state with that data. */
  const [user, setUser] = useState([]);

  /* The `useEffect` hook in the provided code snippet is used to perform side effects in a functional
  component. In this specific case: */
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userFound'));
    if (user) {
      setUser(user);
      console.log('test user ', user);
      console.log("typeof", typeof user)
    }
  }, []);

  /**
   * The `search` function checks if a student ID is provided, searches for the student using the ID,
   * and updates the user state with the found student.
   */
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

  /**
   * The `handleCancel` function removes the 'userFound' item from localStorage and reloads the window.
   */
  const handleCancel = () => {
    localStorage.removeItem('userFound');
    window.location.reload()
  };

  /**
   * The function `handleAddSubject` creates a new `Student` object and adds a subject to it, then logs
   * the student object that the subject was added to.
   */
  const handleAddSubject = () => {
    let subject = new Student();
    let subjectFoundStudent = subject.addSubject(subjectValue, user) //  => return student
    localStorage.removeItem('userFound');
    alert("Subject added to " +  user[0].name + " " + user[0].lastName );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
   
    console.log("foundStudent:", subjectFoundStudent); // Verifica si foundStudent tiene el valor esperado

  };

  const [subjectValue, setSubjectValue] = useState('');

  

  return (
    <>
      <div className='flex flex-col  justify-center items-center  w-screen'>

        {user == undefined || user == false ? (
          <div className=' flex flex-col m-4'>
            <h1>Welcome please search a Student</h1>
            <div className='flex flex-col gap-4'>
              <h1>AddSubject - Working on it....</h1>
              <label htmlFor="studentSearch">
                Student Search:
                <input className='rounded m-4 p-2 bg-blue-100'  required placeholder="Search by ID" id="studentSearch" name="studentSearch" type="text" value={id} onChange={e => setId(e.target.value)} />
              </label>
              <button className='text-white bg-blue-500 hover:bg-blue-400 p-4 rounded-lg hover:text-gray-200' onClick={search}>
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

                      // id="subjects"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={subjectValue}
                      onChange={e => setSubjectValue(e.target.value)}
                    >

                      <option defaultValue>Choose a Subject</option>
                      <option
                        value="computer science"
                      >
                        Computer
                      </option>
                      <option
                        value="math"
                      >
                        Math
                      </option>
                      <option
                        value="english"
                      >
                        English
                      </option>
                      <option
                        value="biology"
                      >
                        Biology
                      </option>


                    </select>
                  </form>
                  <button onClick={handleAddSubject}>Add Subject</button>
                  <button className='border bg-red-500 text-white ' onClick={handleCancel}>Cancel</button>
                </div>
              ))}
            </>
          )
        }
      </div>
    </>
  );
};


export default AddSubject