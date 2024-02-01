import React from 'react'
import ChatComponents from '../Components/ChattingComponents/ChatComponents'
import ProfileComponents from '../Components/ChattingComponents/ProfileComponents'
import SideBar from '../Components/SideBar/SideBar'

function ChatPage() {
  return (
    <div className='h-screen  w-full grid grid-cols-[5rem,1fr,25rem] bg-black'>
      <SideBar/>
       <ChatComponents />
       <ProfileComponents/>
    </div>
  )
}

export default ChatPage