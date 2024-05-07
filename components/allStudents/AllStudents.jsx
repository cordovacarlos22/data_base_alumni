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
    <div className='main-container flex flex-col justify-center items-center  m-4'>


      {items == undefined || items == false? (
        <>
          <h1 className='text-red-500'>No Student in the DATA BASE !!! </h1>
          {/* <span className='text-red-500'>please Add Students to DB</span> */}
        </>
      ):
        (
          <section className=''>
        <h1 className='text-blue-500'>Student List:</h1>



        <div className="relative overflow-x-auto rounded-lg ">
          <table className="w-full  text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400  ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Students id
                </th>
                <th scope="col" className="px-6 py-3 ">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  age
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((student) => (
                <tr className="bg-white dark:bg-gray-800 " key={student.id}>
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
                 Total Register Students : 
                </th>
                <td className="px-6 py-3">

                  {items.length}
                </td>

              </tr>
            </tfoot>
          </table>
        </div>
      </section >
      )}



    </div>

  )
}

export default AllStudents