'use client'

import Register from '@/components/RegisterStudent';
import React, { useState } from 'react'




const AddStudent = () => {


  let [name, setName] = useState('');
  let [lastName, setLastName] = useState('');
  let [age, setAge] = useState('');
  const handleRegister = (e) => {

    let newStudent = new Register(name, lastName, age) // creates AddStudent instance
    newStudent.printRegister();
    setName("");// clear the  input name
    setLastName(""); // clear the last name input 
    setAge(""); //clear the age input

  }



  return (
    <div className='flex flex-col '>
      <div>addStudent</div>
      <form className='border-2  border-red-800 h-48'>
        <label htmlFor="name">
          Name:
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            name='name' id='name' placeholder='Enter Your Name'></input>
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            name='lastName' id='lastName' placeholder='Enter Your Last Name'></input>
        </label>
        <label htmlFor="age">
          age:
          <input
            value={age}
            onChange={e => setAge(e.target.value)}
            name='age' id='age' placeholder='Enter Your Age'></input>
        </label>
      </form>
      <button className='bg-blue-500 w-24 h-24' onClick={() => { handleRegister() }} >Click me to show alert</button>
    </div>
  )
}

export default AddStudent;