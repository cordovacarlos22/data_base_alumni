'use client'

import Register from '@/components/RegisterStudent';
import Student from '@/components/StudenClass';
import React, { useState } from 'react'

/**
 * The above function generates a random 4-digit number.
 * @returns A random 4-digit number is being returned.
 */
const ramdomNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
}


const EnrollStudent = () => {

  let [id, setId] = useState(ramdomNumber());
  let [name, setName] = useState('');
  let [lastName, setLastName] = useState('');
  let [age, setAge] = useState('');
  const handleRegister = (e) => {

    if (name === '' || lastName === '' || age === '' && age < 0 ) {
      alert('Please Fill Entire Form(make sure you have entered a name,last name and age)');
      return;
    } else {
      // e.preventDefault();
      setId(ramdomNumber());
      let newStudent = new Student(id,name, lastName, age) // creates EnrollStudent instance
      newStudent.enrollStudent();
      newStudent.alertStudentEnrollment();
      newStudent.getAllStudents();
      setName("");// clear the  input name
      setLastName(""); // clear the last name input 
      setAge(""); //clear the age input
    }


  }



  return (
    <div className='flex flex-col justify-center items-center m-auto  bg-blue-500  rounded-lg text-white p-6'>
      <h1 className=' font-bold'>Fill form to enroll a <span className=' font-extrabold'>Student</span></h1>
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
        <label className="text-lg" htmlFor="lastName">
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
            min="1"
            onChange={e => setAge(e.target.value)}
            name='age' id='age' placeholder='Enter Your Age'></input>
        </label>
        <button className='bg-white text-blue-500  p-4 rounded-lg hover:text-blue-400 ' onClick={() => { handleRegister() }} ><span className=''>Enroll Student</span></button>
      </form>

    </div>
  )
}

export default EnrollStudent;