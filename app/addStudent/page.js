'use client'

import Register from '@/components/RegisterStudent';
import React, { useState } from 'react'




const AddStudent = () => {


  let [name, setName] = useState('');
  let [lastName, setLastName] = useState('');
  let [age, setAge] = useState('');
  const handleRegister = (e) => {
    // e.preventDefault();
    let newStudent = new Register(name, lastName, age) // creates AddStudent instance
    newStudent.registerStudent();
    newStudent.printStudent();
    newStudent.getAllStudents();
    setName("");// clear the  input name
    setLastName(""); // clear the last name input 
    setAge(""); //clear the age input

  }



  return (
    <div className='flex flex-col justify-center items-center m-auto  bg-blue-500  rounded-lg text-white p-6'>
      <h1 className=' font-bold'>Fill form to register new <span className=' font-extrabold'>Student</span></h1>
      <form className=' flex flex-col p-4  justify-center text-center items-center  gap-4  m-4'>
        <label className='text-lg ' htmlFor="name">
          Name : <br></br>
          <input
            className='ml-2  text-blue-500  p-2 rounded-lg'
            required
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            name='name' id='name' placeholder='Enter Your Name'></input>
        </label>
        <label  className="text-lg" htmlFor="lastName">
          Last Name :<br></br>
          <input
            required
            type='text'
            className='ml-2  text-blue-500  p-2 rounded-lg'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            name='lastName' id='lastName' placeholder='Enter Your Last Name'></input>
        </label>
        <label className='text-lg' htmlFor="age">
          Age :<br></br>
          <input
            type='number'
            className='ml-2  text-blue-500  p-2 rounded-lg '
            required

            value={age}
            onChange={e => setAge(e.target.value)}
            name='age' id='age' placeholder='Enter Your Age'></input>
        </label>
        <button className='bg-white text-blue-500  p-4 rounded-lg hover:text-blue-400 ' onClick={() => { handleRegister() }} ><span className=''>Register Student</span></button>
      </form>
      
    </div>
  )
}

export default AddStudent;