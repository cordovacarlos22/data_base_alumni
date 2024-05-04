'use client'
import React from 'react'


const AddSubject = () => {
  const search = () => {
  // Student.searchStudent()
  console.log(localStorage.getItem("students"));
  }
  return (
    <div>AddSubject
      <h1>working on it ....</h1>
      <form>
     <label htmlFor="studentSearch">
      Student Search:
      <input placeholder="Search by ID" name="studentSearch" type="text"/>
     </label>
     <button className='bg-white text-blue-500  p-4 rounded-lg hover:text-blue-400 ' onClick={() => { search() }} ><span className=''>Search</span></button>
      </form>
    </div>
  )
}

export default AddSubject