'use client'
import React, { useEffect, useState } from 'react'


const AllStudents = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('studentDB'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
     
      {
        items.map((element) => (
          <div key={element.name}>
            <h1>{element.name}</h1>
          </div>
        ))
      }
      
    </>
  
  )
}

export default AllStudents