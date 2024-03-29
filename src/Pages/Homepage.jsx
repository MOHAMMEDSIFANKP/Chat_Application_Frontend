import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function Homepage() {
  return (
    <div className='h-screen text-white w-full grid grid-cols-[3rem,1fr] lg:grid-cols-[4rem,1fr] bg-black'>
      <SideBar/>
      <Outlet />
    </div>
  )
}

export default Homepage