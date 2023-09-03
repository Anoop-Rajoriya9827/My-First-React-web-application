"use client"
import React,{useState} from 'react'
import Main from '@/Components/Main'
import Footer from '@/Components/Footer'

const page = () => {
  const [name , setname] = useState("Anoop")
  return (
   <>
   <Main Author={name}/>
   </>
  )
}

export default page