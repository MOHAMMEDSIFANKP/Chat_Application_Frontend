import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

function Protected() {
    const token = localStorage.getItem('token')
    if (token){
        return <Outlet/>
    } else {
      return <Navigate to={'/login'} />;
    }
}

export default Protected