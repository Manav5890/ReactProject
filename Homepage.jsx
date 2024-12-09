import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import img from './img1.jpg'

const Homepage = () => {
  return (
    <div>
      <Nav/>
     
    <Outlet/>
    </div>
  )
}

export default Homepage
