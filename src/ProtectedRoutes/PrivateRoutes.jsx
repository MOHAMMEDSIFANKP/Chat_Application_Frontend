import React from 'react'
import ChattingPage from '../Pages/ChattingPage'
import { Outlet } from 'react-router-dom'

function PrivateRoutes() {
    const token = localStorage.getItem('token')
    if (token){
        return <ChattingPage/>
    }
    return <Outlet/> 
}

export default PrivateRoutes