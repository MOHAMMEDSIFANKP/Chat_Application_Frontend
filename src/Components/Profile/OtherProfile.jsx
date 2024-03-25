import { Accordion,AccordionHeader, AccordionBody, Avatar,Typography, Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function OtherProfile() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [Profile,setProfile] = useState('')

  const UserProfileFuc =async ()=>{
    try {
      const res = ''
      if (res.status==200){
        
      }
    } catch (error) {
      
    }
  }
  return (
      <Card className='rounded-md m-5 bg-gray-300'>
      <div className='absolute   w-full bg-transparent top-40 z-10' style={{ transform: 'translateZ(0px)' }}>
        <Avatar variant="circular" alt="candice" className='-top-20 left-[45%] w-44 h-44 absolute z-20' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" />

        <Card className='mx-5 h-96'>
          <div className='grid grid-cols-2 mt-5'>
            <div className='flex justify-center items-center'>
              <div>
                <p className='text-center font-bold text-2xl'>22</p>
                <p className='text-center text-sm text-gray-500'>Friends</p>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-black text-white font-bold text-sm p-2 rounded-md' text>Connect</button>
            </div>

          </div>
          <div className='text-center mt-16'>
            <p className='font-bold capitalize text-black text-3xl'>SIfan Daxo</p>
            <div className='flex justify-center'>
              <FaLocationDot className='mt-2' />
              <p className='p-1'>Irumbuzhi, malappuram, Kerala</p>
            </div>

          </div>
          <hr className='mx-5 my-10' />
          <div className='text-center mx-10'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
          </div>
        </Card>
        <Card className='mx-5 mt-5'>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className='ps-3' onClick={() => handleOpen(1)}>SIfan's Friends</AccordionHeader>
            <AccordionBody className='h-[16rem] overflow-auto'>
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                  </ListItemPrefix>
                  <div className='grid grid-cols-[1fr,4rem] w-full'>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        sifan007sifu@gmail.com
                      </Typography>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='bg-black text-white font-bold text-sm p-2 rounded-md' text>Connect</p>
                    </div>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                  </ListItemPrefix>
                  <div className='grid grid-cols-[1fr,4rem] w-full'>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        sifan007sifu@gmail.com
                      </Typography>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='bg-black text-white font-bold text-sm p-2 rounded-md' text>Connect</p>
                    </div>
                  </div>
                </ListItem>
                  <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                  </ListItemPrefix>
                  <div className='grid grid-cols-[1fr,4rem] w-full'>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        sifan007sifu@gmail.com
                      </Typography>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='bg-black text-white font-bold text-sm p-2 rounded-md' text>Connect</p>
                    </div>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                  </ListItemPrefix>
                  <div className='grid grid-cols-[1fr,4rem] w-full'>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        sifan007sifu@gmail.com
                      </Typography>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='bg-black text-white font-bold text-sm p-2 rounded-md' text>Connect</p>
                    </div>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                  </ListItemPrefix>
                  <div className='grid grid-cols-[1fr,4rem] w-full'>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tania Andrew
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        sifan007sifu@gmail.com
                      </Typography>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='bg-black text-white font-bold text-sm p-2 rounded-md' text>Connect</p>
                    </div>
                  </div>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
        </Card>
      </div>
      <div className="h-2/6 z-1 rounded-md bg-center bg-cover" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')`
      }}>

      </div>
      <div></div>
    </Card>
    
  )
}

export default OtherProfile