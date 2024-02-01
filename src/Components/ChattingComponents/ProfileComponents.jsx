import { Avatar, Card } from '@material-tailwind/react'
import React from 'react'

function ProfileComponents() {
  return (
    <>
      <Card className='m-5 ms-0  bg-gray-300'>
        <Card className='m-4 h-1/3 flex justify-center items-center gap-5'>
          <Avatar
          className='h-32 w-32'
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="profile picture"
          />
          <div className='text-center'>
          <p className='font-bold text-black capitalize'>Mohammed Sifan KP</p>
          <p className='text-gray-700'>mohammedsifankp@gmail.com</p>
          </div>
        </Card>
      </Card>
    </>
  )
}

export default ProfileComponents