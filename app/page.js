import React from 'react'
import Link from 'next/link'
const Home = () => (
  <div>
    <h1>Studen Dashboard</h1>
    <Link href='/addStudent' >Register a Student</Link>
  </div>
)

export default Home