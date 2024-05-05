'use client'
import React, { useEffect, useState } from 'react'


const AllStudents = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('students'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div className='main-container '>


      <section className=''>
        <h1>Student List:</h1>



        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3rounded-l-s-lg">
                  id
                </th>
                <th scope="col" className="px-6 py-3 ">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                  age
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((student) => (
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

                  {items.length}
                </td>

              </tr>
            </tfoot>
          </table>
        </div>
      </section>



    </div>

  )
}

export default AllStudents