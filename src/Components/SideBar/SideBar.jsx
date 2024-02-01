import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { IoMdAdd, IoMdSettings } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/Logo.png'
import { Tooltip } from '@material-tailwind/react';
function SideBar() {
    return (
        <>
            <div className='grid grid-rows-[7rem,1fr,1fr,5rem] ms-2'>
                <div className='flex justify-center items-center'>
                    <img src={Logo} alt="" />
                </div>
                <div className='text-gray-700'>
                    <Tooltip content="Add Friends">
                        <div className='h-10 w-15 hover:bg-white hover:rounded-lg flex justify-center items-center'>
                            <button>
                                <IoMdAdd className='h-8 w-8 ' />
                            </button>
                        </div>
                    </Tooltip>
                    <Tooltip content="Message">
                        <div className='h-10 w-15 mt-4 hover:bg-white hover:rounded-lg flex justify-center items-center'>
                            <button>
                                <BiSolidMessage className='h-8 w-8 ' />
                            </button>
                        </div>
                    </Tooltip>
                </div>
                <div className='text-gray-700'>
                    <hr className='ms-3 border-gray-800' />
                    <Tooltip content="Profile">
                        <div className='h-10 w-15 mt-4 hover:bg-white hover:rounded-lg flex justify-center items-center'>
                            <button>
                                <FaUser className='h-8 w-8 ' />
                            </button>
                        </div>
                    </Tooltip>  
                    <Tooltip content="Settings">
                    <div className='h-10 w-15 mt-4 hover:bg-white hover:rounded-lg flex justify-center items-center'>
                        <IoMdSettings className='w-8 h-8' />
                    </div>
                    </Tooltip>  
                </div>
                <div className='text-gray-600 flex justify-center'>
                <Tooltip content="Logout">
                    <div className='h-10 w-15 hover:bg-white hover:rounded-lg flex justify-center items-center'>
                        <BiLogOut className='w-8 h-8' />
                    </div>
                    </Tooltip>  
                </div>
            </div>
        </>
    )
}

export default SideBar