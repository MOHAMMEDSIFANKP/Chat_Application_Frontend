import { Avatar, Badge, Card, List, ListItem } from '@material-tailwind/react'
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Bgimage from '../../assets/ConnectToPeople.avif'
import React, { useState } from 'react'

function ChatComponents() {
const [search,setSearch] = useState('')
  return (
    <>
      <Card className='m-5 p-5 bg-gray-300 grid grid-cols-[20rem,1fr] overflow-hidden'>
        <div className='grid grid-rows-[3rem,4rem,1fr]'>
          <div className='flex justify-center items-center w-full'>
          <div className='relative w-full'>
              <input
                type="text"
                className='w-full rounded-lg h-12 bg-gray-50 shadow-xl focus:outline-none pl-3 pr-10' // Adjusted ps-3 to pl-3 and added pr-10
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search ? (
                <IoClose
                  className='absolute top-0 right-0 mt-4 mr-3 cursor-pointer'
                  onClick={() => setSearch('')}
                />
              ):(
                <IoSearch className='absolute top-0 w-6 h-6 right-0 text-gray-600 mt-3 mr-3 cursor-pointer' />
              )}
            </div>
          </div>
          <div className='flex items-center'>
            <p className='text-xl font-bold text-black'>Chat</p>
          </div>
          <div className='overflow-y-auto rounded-lg bg-white h-[46rem] '>
            <div className='h-16 m-2 px-2 bg-white grid grid-cols-[3rem,1fr,3rem] cursor-pointer hover:rounded-lg hover:bg-gray-100'>
              <div className='flex justify-center items-center'>
                <Badge overlap="circular" color="green" placement="bottom-end">
                  <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="profile picture"
                  />
                </Badge>
              </div>

              <div className='m-3'>
                <p className='text-black text-sm'>Mohammed Sifan KP</p>
                <p className='text-gray-800 text-xs'>You: Parada</p>
              </div>
              <div className='flex justify-center items-center'>
                <Badge content="5">
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-[4rem,1fr,6rem] overflow-hidden'>
          <div className='border-b-2  grid grid-cols-[5rem,1fr,7rem]'>
            <div className='flex justify-center '>
              <Badge overlap="circular" className='mb-3' color="green" placement="bottom-end">
                <Avatar
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  alt="profile picture"
                />
              </Badge>
            </div>
            <div className='text-black ms-2'>
              <p className='text-lg font-bold'>Mohammed Sifan KP</p>
              <p className='text-xs text-gray-600'>mohammedsifankp@gmail.com</p>
            </div>
            <div className='flex justify-center mt-2'>
              <CiSearch className='w-8 h-8 ps-2' />
              <IoCallOutline className='w-8 h-8 ps-2' />
              <CiMenuKebab className='w-8 h-8 ps-2' />
            </div>
          </div>
          <div className='overflow-y-auto overflow-x-hidden w-full'>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>
            <div className='w-full flex justify-start gap-2 ms-2'>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
              <p className='bg-white py-1 px-2 text-black text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
            </div>
            <div className='w-full flex justify-end gap-2'>
              <p className='bg-purple-300 py-1 px-2 text-white text-sm rounded-s-md rounded-t-md'>Daxooofds</p>
              <Avatar
                className='w-7 h-7'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
              />
            </div>

          </div>
          <div className='flex justify-center items-start w-full pt-2'>
            <div className='bg-white grid grid-cols-[3.5rem,1fr,3.5rem] w-full h-14 ms-5 rounded-xl shadow-xl'>
              <div className='flex justify-center items-center text-gray-800 bg-gray-300 m-2 rounded-lg'>
                <FaPlus />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Type a message here'
                  className='focus:outline-none h-full w-full ps-2' />
              </div>
              <div className='flex justify-center items-center bg-purple-300 text-white m-2 rounded-lg'>
                <IoIosSend className='w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
     {/* <div 
     className='bg-cover ms-5 rounded-lg'
       style={{
        backgroundImage: `url(${Bgimage})`,
      }}>
     </div> */}
      </Card>
    </>
  )
}

export default ChatComponents