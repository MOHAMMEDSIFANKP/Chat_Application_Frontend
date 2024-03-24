import React, { useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { IoMdAdd, IoMdSettings,IoMdNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/Logo.png'
import { Card, List, ListItem, Tooltip } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import { LogoutDetails } from '../../Redux/UserSlice';
import { Logout } from '../../Service/Services';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';


function SideBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();
    const [open,SetOpen] = useState(false)

    const currentPath = location.pathname;

    // Logout
    const SignoutFunc = async () => {
        try {
            const res = await Logout();
            if (res.status === 200) {
                localStorage.removeItem("token");
                dispatch(LogoutDetails());
                navigate("/login");
            }
        } catch (error) {
            localStorage.removeItem("token");
            dispatch(LogoutDetails());
            navigate("/login");
            console.log(error);
        }
    };
    return (
        <>
        {open?<Card className='absolute z-10 top-10 left-24 max-h-96 w-2/6 overflow-x-auto'>
            <p className='ps-4 pt-2 font-bold'>Notifications</p>
            <hr className='mx-5 mt-3' />
            <List >
                <ListItem className='bg-gray-300'>
                    <p>Sifan send a connection Requsts</p>
                </ListItem>
                <ListItem className='bg-gray-300'>
                    <p>Sifan send a connection Requsts</p>
                </ListItem>
                <ListItem className='bg-gray-300'>
                    <p>Sifan send a connection Requsts</p>
                </ListItem>
                <ListItem className='bg-gray-300'>
                    <p>Sifan send a connection Requsts</p>
                </ListItem>
            </List>
        </Card>:''}
            <div className='grid grid-rows-[7rem,1fr,1fr,5rem] ms-2'>
                <div className='flex justify-center items-center'>
                    <img src={Logo} alt="" />
                </div>
                <div className='text-gray-700'>
                    <Tooltip content="Add Friends">
                        <div onClick={() => navigate('/users')} className={`h-10 w-15 ${currentPath === '/users' ? 'bg-white rounded-lg' : 'hover:bg-white hover:rounded-lg'} flex justify-center items-center mb-2`}>
                            <button>
                                <IoMdAdd className='h-6 w-6 ' />
                            </button>
                        </div>
                    </Tooltip>
                    <Tooltip content="Message">
                        <div onClick={() => navigate('/')} className={`h-10 w-15 ${currentPath === '/chat' ? 'bg-white rounded-lg' : 'hover:bg-white hover:rounded-lg'} flex justify-center items-center mt-2`}>
                            <button>
                                <BiSolidMessage className='h-6 w-6 ' />
                            </button>
                        </div>
                    </Tooltip>
                    <Tooltip content="Notifications">
                        <div onClick={()=>SetOpen(!open)} className='h-10 w-15 hover:bg-white hover:rounded-lg flex justify-center items-center mt-2'>
                            <button>
                                <IoMdNotifications className='h-6 w-6 ' />
                            </button>
                        </div>
                    </Tooltip>
                </div>

                <div className='text-gray-700'>
                    <hr className='ms-3 border-gray-800' />
                    <Tooltip content="Profile">
                        <div onClick={() => navigate('/profile')} className={`h-10 w-15 ${currentPath === '/profile' ? 'bg-white rounded-lg' : 'hover:bg-white hover:rounded-lg'} flex justify-center items-center my-2`}>
                            <button>
                                <FaUser className='h-6 w-6 ' />
                            </button>
                        </div>
                    </Tooltip>
                    <Tooltip content="Settings">
                        <div onClick={() => navigate('/settings')} className={`h-10 w-15 ${currentPath === '/settings' ? 'bg-white rounded-lg' : 'hover:bg-white hover:rounded-lg'} flex justify-center items-center mt-2`}>
                            <IoMdSettings className='w-6 h-6' />
                        </div>
                    </Tooltip>
                </div>
                <div className='text-gray-600 flex justify-center'>
                    <Tooltip content="Logout">
                        <div onClick={SignoutFunc} className='h-10 w-15 hover:bg-white hover:rounded-lg flex justify-center items-center'>
                            <BiLogOut className='w-6 h-6' />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default SideBar