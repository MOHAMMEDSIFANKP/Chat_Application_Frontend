import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

function PrivateRoutes() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    if (token){
        navigate('/');
    }
    return <Outlet/> 
}

export default PrivateRoutes