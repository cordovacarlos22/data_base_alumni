'use client'

import Student from '@/components/StudenClass';
import React, { useState } from 'react'




const AddStudent = () => {


  let [name, setName] = useState('');
  const handleRegister = (e) => {
    
    let student1 = new Student(1, name, 'cordova', 25, ',math', 10)
    student1.printStudent();
    setName("")
    
  }

  

  return (
    <div className='flex flex-col '>
      <div>addStudent</div>
      <form  className='border-2  border-red-800 h-48'>
        <label htmlFor="name">Name:
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            name='name' id='name' placeholder='Enter Your Name'></input>
        </label>
      </form>
      <button className='bg-blue-500 w-24 h-24' onClick={() => { handleRegister() }} >Click me to show alert</button>
    </div>
  )
}

export default AddStudent;