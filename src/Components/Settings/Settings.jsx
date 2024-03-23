import { Card } from '@material-tailwind/react'
import React from 'react'
import { IoMdSettings } from 'react-icons/io'

function Settings() {
  return (
    <Card className='m-5 p-5 grid bg-gray-300 gap-6'>
      <div className='flex first-letter w-full '><IoMdSettings className='w-10 h-10 ' />

      </div>
    </Card>
  )
}

export default Settings