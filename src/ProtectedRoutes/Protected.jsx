import React from 'react'
import LoginPage from '../Pages/LoginPage'
import { Outlet, useNavigate } from 'react-router-dom';

function Protected() {
  const navigate = useNavigate();
    const token = localStorage.getItem('token')
    if (token){
        return <Outlet/>
    } else {
      navigate('/login');
    }
}

export default Protected