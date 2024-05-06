'use client'
import React, { useState } from 'react';
import Student from '@/components/StudenClass';

const FindByName = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const search = () => {
    if (name === '') {
      alert('Please enter a student name');
    } else {
      let studentSearch = new Student();
      let foundStudents = studentSearch.searchStudentByName(name); // Ensure this returns an array
      console.log("foundStudents:", foundStudents);
      setUsers(foundStudents); // Update users state with the found students
    }
  };

  const handleCancel = () => {
    localStorage.removeItem('userFound');
    window.location.reload()
  };

  return (
    <div>
      <h1>Welcome, please search for a student by name</h1>
      <div>
        <label htmlFor="studentSearch">
          Student Search:
          <input required placeholder="Search by Name" id="studentSearch" name="studentSearch" type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button className='bg-white text-blue-500 p-4 rounded-lg hover:text-blue-400' onClick={search}>
          <span>Search</span>
        </button>
      </div>

      {users.length > 0 && (
        <div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(student => (
                <tr className="bg-white dark:bg-gray-800" key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">
                  STUDENTS
                </th>
                <td className="px-6 py-3">
                  {users.length}
                </td>
              </tr>
            </tfoot>
          </table>

          <button className='border bg-red-500 text-white ' onClick={handleCancel}>exit</button>
        </div>
      )}
    </div>
  );
};

export default FindByName;
