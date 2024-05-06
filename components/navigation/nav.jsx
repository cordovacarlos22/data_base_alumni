import React from 'react'
import Link from 'next/link'
const Nav = () => {
  let navLinkList = [{
    name: 'Home',
    link: '/'
  },
  {
    name: 'Student Enrollment',
    link: '/enrollStudent'
  },
  {
    name: 'Enroll Student Subject',
    link: '/enrollStudentSubject'
    },
    {
      name: 'Grade Student',
      link: '/gradeStudent'
    },
    {
      name: 'Find Student By Name',
      link: '/foundstudentbyname'
    },
    {
      name: 'Find Student By  Last Name',
      link: '/foundstudentbylastname'
    }

  ]
  return (
    <header className='bg-blue-500 w-80  h-screen flex flex-col text-white' >
      <h1 className='text-xl  font-bold text-white mx-auto my-4'>Student Dashboard </h1>
      <nav className='  font-semibold p-4 '>
        <ul>
          {navLinkList.map((link) => {
              return (
                <li key={link.name}>
                  <Link href={link.link}>
                    {link.name}
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
    </header>

  )
}

export default Nav