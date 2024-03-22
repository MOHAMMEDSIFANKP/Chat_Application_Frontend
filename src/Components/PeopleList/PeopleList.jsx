import { Card, Select, Option } from '@material-tailwind/react'
import React, { useState } from 'react'
import { IoClose, IoSearch } from 'react-icons/io5'
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
function PeopleList() {
  const [Search, setSearch] = useState('')
  return (
    <Card className='m-5 p-5 grid grid-cols-2 bg-gray-300'>
      <div className='w-full grid grid-rows-[3rem,2rem,1fr] gap-2'>
        <div className='w-full grid grid-cols-[1fr,15rem] gap-5'>
          <input
            type="text"
            className='w-full rounded-lg h-12 bg-gray-50 shadow-xl focus:outline-none pl-3 pr-10' // Adjusted ps-3 to pl-3 and added pr-10
            placeholder='Search'

          // value={Search}
          />
          <Select className='rounded-lg h-12 bg-gray-50 shadow-xl focus:outline-none '>
            <Option>MyFriends</Option>
            <Option>Other</Option>

          </Select>
        </div>
        <p className='text-xl font-bold text-black'>People</p>
        <div className='w-full '>
          <Card className="w-full h-full">
            <List>
              <ListItem>
                <ListItemPrefix>
                  <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                </ListItemPrefix>
                <div className='grid grid-cols-[1fr,1rem] w-full'>
                <div>
                <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    sifan007sifu@gmail.com
                  </Typography>
                </div>
                <div>
                  Add
                </div>
                </div>
              </ListItem>
             
            </List>
          </Card>
        </div>
      </div>
      <div>2</div>
    </Card>
  )
}

export default PeopleList