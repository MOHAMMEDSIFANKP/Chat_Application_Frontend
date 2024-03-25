import React, { useEffect, useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { IoMdAdd, IoMdSettings, IoMdNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/Logo.png'
import { Card, List, ListItem, Tooltip, Badge } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import { LogoutDetails } from '../../Redux/UserSlice';
import { IsReadUpdate, Logout, UserNotification, UserNotificationCount } from '../../Service/Services';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { wsApiUrl } from '../../constants/constants';


function SideBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();
    const [open, SetOpen] = useState(false)
    const [notification, setNotification] = useState([])
    const [Count, setCount] = useState('')
    const currentPath = location.pathname;

    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);

    const GetNotificationFuc = async () => {
        const token = localStorage.getItem('token');
        const decode = jwtDecode(token);
        try {
            const res = await UserNotification(decode.user_id);
            setNotification(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    const NotificationReact = async (notify) => {
        if (notify.is_read == true) {
            navigate(notify.url_path, {
                state: { "type_list": notify.type_list },
            })
            return
        }
        try {
            const res3 = await IsReadUpdate(notify.id, { "is_read": true })
            if (res3.status == 200) {
                navigate(notify.url_path, {
                    state: { "type_list": notify.type_list },
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Logout
    const SignoutFunc = async () => {
        try {
            const res1 = await Logout();
            if (res1.status === 200) {
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

    const userNotificationCountFuc = async () => {
      
        const res4 = await UserNotificationCount(decode.user_id)
        if (res4.status == 200) {
            setCount(res4.data.un_read_count)
        }
    }

    const client = new W3CWebSocket(`${wsApiUrl}/ws/notifications/${decode.user_id}`);

    useEffect(() => {
        client.onopen = () => {
            console.log('Notification WebSocket Client Connected');
        };

        client.onmessage = (message) => {
            const data = JSON.parse(message.data);
            console.log(data);
            setCount(data);
        };

        return () => {
            client.close();
        };
    }, []);


    useEffect(() => {
        GetNotificationFuc()
    }, [open == true])
    useEffect(() => {
        userNotificationCountFuc()
    }, [])
    return (
        <>
            {open ? <Card className='absolute z-10 top-10 left-24 max-h-96 w-2/6 overflow-x-auto'>
                <p className='ps-4 pt-2 font-bold'>Notifications</p>
                <hr className='mx-5 mt-3' />
                <List >
                    {notification.data.map((notif, index) => (
                        <ListItem key={index} className={notif.is_read ? "text-sm" : "bg-gray-300 text-sm"} onClick={() => {
                            NotificationReact(notif)
                        }}>
                            <p>{notif?.message}</p>
                        </ListItem>
                    ))}
                </List>
            </Card> : ''}
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
                        <div onClick={() => SetOpen(!open)} className='h-10 w-15 hover:bg-white hover:rounded-lg flex justify-center items-center mt-2'>
                            <button>
                                <IoMdNotifications className='h-6 w-6 ' />
                            </button>
                        </div>
                    </Tooltip>
                    {Count !== 0 && <Badge content={Count} className='-mt-9 -me-14  ' />}
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