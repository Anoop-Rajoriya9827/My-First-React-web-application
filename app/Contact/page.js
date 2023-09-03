'use client'
import React,{useState} from 'react'

const page = () => {
    const [name,setname] = useState("Anoop")
  return (
    <>
    <div className="main">
        <h1>This is Contact</h1>
        <p>Author Name is {name}</p>
    </div>
    </>
  )
}

export default page