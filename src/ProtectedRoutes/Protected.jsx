import React from 'react'
import LoginPage from '../Pages/LoginPage'
import { Outlet } from 'react-router-dom'

function Protected() {
    const token = localStorage.getItem('token')
    if (token){
        return <Outlet/>
    } else {
      return <LoginPage/>
    }
}

export default Protected