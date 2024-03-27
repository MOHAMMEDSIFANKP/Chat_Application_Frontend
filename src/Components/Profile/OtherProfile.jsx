import { Accordion, AccordionHeader, AccordionBody, Avatar, Typography, Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AcceptRequest, CreateRequst, RemoveRequest, UserDetailsAndFriends } from '../../Service/Services';
import { useSelector } from 'react-redux';

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
  const navigate = useNavigate()
  let { email } = useParams();
  const location = useLocation();
  const friends_id = location.state && location.state.friends_id;
  if (friends_id == '') {
    navigate('/')
  }
  const { UserInfo } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [Profile, setProfile] = useState('')
  const [friends_list, setfriends_list] = useState('')
  const GetProfileFunc = async () => {
    try {
      const res = await UserDetailsAndFriends(friends_id, UserInfo.id)
      if (res.status === 200) {
        if (res.data.data.email !== email) {
          navigate('/pagenotfound')
        }
        setProfile(res.data.data)
        setfriends_list(res.data.data.friends_list)
      }
    } catch (error) {
      console.log(error);
    }
  }

  //-------------- Connections-----------------------
// Send Connection Requsts
const CreateRequstFuc = async (id) => {
  const data = {
    "user_id": UserInfo.id,
    "friends_id": id,
    "is_request": true
  }
  try {
    const res3 = await CreateRequst(data)
    if (res3.status === 201) {
      GetProfileFunc()
    }
  } catch (error) {
    ToastError('Something is wrong')
    console.log(error);

  }
}

// Accept the requsts
const AcceptRequestFuc = async (id) => {
  const data = {
    "user_id": id,
    "friends_id": UserInfo.id,
  }
  try {
    const res4 = await AcceptRequest(data)
    if (res4.status === 200) {
      GetProfileFunc()
    }
  } catch (error) {

  }
}

// Remove the requsts
const RemoveRequestFuc = async (id) => {
  const data = {
    "user_id": UserInfo.id,
    "friends_id": id,
  }
  try {
    const res4 = await RemoveRequest(data)
    if (res4.status === 200) {
      GetProfileFunc()
    }
  } catch (error) {

  }
}
  useEffect(() => {
    GetProfileFunc()
  }, [email])
  return (
    <Card className='rounded-md m-5 bg-gray-300'>
      <div className='absolute   w-full bg-transparent top-40 z-10' style={{ transform: 'translateZ(0px)' }}>
        <Avatar variant="circular" alt="candice" className='-top-20 left-[45%] w-44 h-44 absolute z-20' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" />

        <Card className='mx-5 h-96'>
          <div className='grid grid-cols-2 mt-5'>
            <div className='flex justify-center items-center'>
              <div className=' hover:rounded-md cursor-pointer' onClick={() => handleOpen(1)}>
                <p className='text-center font-bold text-2xl'>{Profile?.friends_count}</p>
                <p className='text-center text-sm text-gray-500'>Friends</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              {Profile?.is_connect === 'not_friends' ? (
                <button className='bg-black text-white font-bold text-sm p-2 rounded-md' onClick={() => CreateRequstFuc(Profile.id)} >Connect</button>
              ) : Profile?.is_connect === 'pending' ? (
                <button className='bg-yellow-600 text-white font-bold text-sm p-2 rounded-md'>Pending</button>
              ) : Profile?.is_connect === 'accept' ? (
                <button className='bg-green-400 text-white font-bold text-sm p-2 rounded-md' onClick={() => AcceptRequestFuc(Profile.id)}>Accept</button>
              ) : Profile?.is_connect === 'remove' ? (
                <button className='bg-red-400 text-white font-bold text-sm p-2 rounded-md' onClick={() => RemoveRequestFuc(Profile.id)}>Remove</button>
              ) : ""}
            </div>

          </div>
          <div className='text-center mt-16'>
            <p className='font-bold capitalize text-black text-3xl'>{Profile?.first_name} {Profile?.last_name}</p>
            <p>{email || Profile.email}</p>
            <div className='flex justify-center'>
              <FaLocationDot className='mt-2' />
              <p className='p-1'>{Profile?.place}, {Profile?.district}, {Profile?.state}</p>
            </div>

          </div>
          <hr className='mx-5 my-10' />
          <div className='text-center mx-10'>
            <p>{Profile.bio ? Profile.bio : "No bio"} </p>
          </div>
        </Card>
        <Card className='mx-5 mt-5'>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className='ps-3' onClick={() => handleOpen(1)}>SIfan's Friends</AccordionHeader>
            <AccordionBody className='max-h-[16rem] overflow-auto'>
              <List>
                {friends_list.length > 0 ? friends_list.map((user, index) => (
                  <>
                    <div key={index} className='grid grid-cols-[1fr,5.5rem] my-1 hover:bg-gray-200 hover:rounded-lg cursor-pointer'>
                    <div className='grid grid-cols-[4.5rem,1fr] py-3 ' onClick={() => UserInfo.email===user.email?"":navigate(`/profile/${user.email}`, {
                        state: { friends_id: user.id },
                      })}>
                        <div className='flex justify-center items-center'>
                          <Avatar
                            variant="circular"
                            alt="candice"
                            src={user.profile_image ? user.profile_image : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"}
                          />
                        </div>

                        <div>
                          <Typography variant="h6" color="blue-gray">
                            {user.first_name} {user.last_name}
                          </Typography>
                          <Typography variant="small" color="gray" className="font-normal">
                            {user.email}
                          </Typography>
                        </div>
                      </div>
                      <div className='flex justify-center items-center '>
                        {UserInfo.email === user.email ? (<><p className='font-bold'>You</p></>) : user?.is_connect === 'not_friends' ? (
                          <button className='bg-black text-white font-bold text-sm p-2 rounded-md' onClick={() => CreateRequstFuc(user.id)} >Connect</button>
                        ) : user?.is_connect === 'pending' ? (
                          <button className='bg-yellow-600 text-white font-bold text-sm p-2 rounded-md'>Pending</button>
                        ) : user?.is_connect === 'accept' ? (
                          <button className='bg-green-400 text-white font-bold text-sm p-2 rounded-md' onClick={() => AcceptRequestFuc(user.id)}>Accept</button>
                        ) : user?.is_connect === 'remove' ? (
                          <button className='bg-red-400 text-white font-bold text-sm p-2 rounded-md' onClick={() => RemoveRequestFuc(user.id)}>Remove</button>
                        ) : ""}
                      </div>

                    </div>
                  </>
                )) : <><p className='text-center'>No Result found</p></>}
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