import { Accordion, AccordionHeader, AccordionBody, Avatar, Typography, Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { RemoveRequest, UserDetails, UserPrfileImageUpdate } from '../../Service/Services';
import { jwtDecode } from 'jwt-decode';
import { FaUserEdit } from "react-icons/fa";
import { UserEditModal } from '../Modal/UserEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from '../Toast/Toast';
import { setUserDetails } from '../../Redux/UserSlice';

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

function UserProfile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [Profile, setProfile] = useState([])
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token);
  const [profile_image, setProfile_image] = useState('')
  const { UserInfo } = useSelector((state) => state.user);

  const UserProfileFuc = async () => {
    try {
      const res = await UserDetails(decoded.user_id);
      if (res.status == 200) {
        setProfile(res.data)
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
        UserProfileFuc()
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    UserProfileFuc()
  }, [])


  const openFileInput = () => {
    const fileInput = document.getElementById('profileImageInput');
    fileInput.click();
  }
  const handleProfileImageChange = async (event) => {
    const file = event.target.files[0];
    setProfile_image(file)
    try {
      const formData = new FormData();
      formData.append('profile_image', file);
      const response = await UserPrfileImageUpdate(UserInfo.id, formData)
      if (response?.status === 200) {
        handleOpen()
        const data = {
          id: UserInfo.id,
          first_name: UserInfo.first_name,
          last_name: UserInfo.last_name,
          email: UserInfo.email,
          profile_image: response.data.profile_image,
          state: UserInfo.state,
          district: UserInfo.district,
          place: UserInfo.place,
          bio: UserInfo.bio,
          is_google: UserInfo.is_google,
        }
        ToastSuccess('Profile image updated successfully!');
        dispatch(setUserDetails({ UserInfo: data }));
      }
    } catch (error) {
      console.log(error);
      ToastError('Something Worng')

    }
  }

  return (
    <Card className='rounded-md m-5 bg-gray-300'>
      <div className='absolute   w-full bg-transparent top-40 z-10' style={{ transform: 'translateZ(0px)' }}>
        <Avatar variant="circular" alt="candice" className='-top-20 left-[45%] w-44 h-44 absolute z-20' src={profile_image ? URL.createObjectURL(profile_image) : UserInfo.profile_image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"}
          onClick={openFileInput}
        />
        <input type="file" id="profileImageInput" style={{ display: 'none' }} accept="image/*" onChange={handleProfileImageChange} />
        <Card className='mx-5 h-96'>
          <div className='grid grid-cols-2 mt-5'>
            <div className='flex justify-center items-center'>
              <div className='cursor-pointer' onClick={() => handleOpen(1)}>
                <p className='text-center font-bold text-2xl'>{Profile.friends_count}</p>
                <p className='text-center text-sm text-gray-500'>Friends</p>
              </div>
            </div>
            <UserEditModal />
          </div>
          <div className='text-center mt-16'>
            <p className='font-bold capitalize text-black text-3xl'>{UserInfo?.first_name} {UserInfo?.last_name}</p>
            <p className='text-sm'>{Profile.email}</p>

            <div className='flex justify-center'>
              <FaLocationDot className='mt-2' />
              <p className='p-1'>{UserInfo?.place}, {UserInfo?.district}, {UserInfo?.state}</p>
            </div>

          </div>
          <hr className='mx-5 my-10' />
          <div className='text-center mx-10'>
            <p>{UserInfo.bio} </p>
          </div>
        </Card>
        <Card className='mx-5 mt-5'>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className='ps-3' onClick={() => handleOpen(1)}>Your Friends</AccordionHeader>
            <AccordionBody className='max-h-[16rem] overflow-auto'>
              <List>
                {Profile?.friends_list ? (
                  Profile?.friends_list.map((user, index) => (
                    <div key={index} className='grid grid-cols-[1fr,5.5rem] my-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg'>
                      <div className='grid grid-cols-[4.5rem,1fr] py-3 ' onClick={() => navigate(`/profile/${user.email}`, {
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
                        <button className='bg-red-400 text-white font-bold text-sm p-2 rounded-md' onClick={() => RemoveRequestFuc(user.id)}>Remove</button>
                      </div>

                    </div>

                  ))
                ) : (
                  <p>No friends to display</p>
                )}


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

export default UserProfile