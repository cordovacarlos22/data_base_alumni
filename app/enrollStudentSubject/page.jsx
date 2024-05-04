'use client'
import React, { useState } from 'react'
import Student from '@/components/StudenClass';

const AddSubject = () => {

  let [id,setId] = useState()
  const search = (e) => {
    
    let studentSearch =  new Student();
    studentSearch.searchStudent(id)


  }
  return (
    <div>AddSubject
      <h1>working on it ....</h1>

        <label htmlFor="studentSearch">
          Student Search:
          <input placeholder="Search by ID" id='studentSearch' name="studentSearch" type="text" value={id} onChange={e => setId(e.target.value)} />
        </label>
        <button className='bg-white text-blue-500  p-4 rounded-lg hover:text-blue-400 ' onClick={() => { search() }} ><span className=''>Search</span></button>
      
    </div>
  )
}

export default AddSubject