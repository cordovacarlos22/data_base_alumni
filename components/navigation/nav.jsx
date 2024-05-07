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
    <header className='bg-blue-500  h-screen  w-80 z-10 text-white' >
      <h1 className='text-xl  font-bold text-white  text-center'>Student Dashboard </h1>
      <nav className=' h-full w-full  font-semibold p-4  flex   justify-center '>
        <ul className=' text-center'>
          {navLinkList.map((link) => {
              return (
                <li  className="hover:text-gray-200 w-1/2 hover:border-gray-200 border-b-2  m-4" key={link.name}>
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