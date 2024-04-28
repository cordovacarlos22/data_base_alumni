import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <header className='bg-blue-500 w-80  h-screen flex flex-col text-white' >
      <h1 className='text-xl  font-bold text-white mx-auto my-4'>Student Dashboard </h1>
      <nav className='  font-semibold p-4 '>
        <ul>
          <li>
            <Link href='/' >Home</Link>
          </li>
          <li>
            <Link href='/addStudent' >Register Student</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Nav