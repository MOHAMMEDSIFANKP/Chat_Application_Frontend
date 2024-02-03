import React from 'react'
import ChatComponents from '../Components/ChattingComponents/ChatComponents'
import SideBar from '../Components/SideBar/SideBar'

function ChatPage() {
  return (
    <div className='h-screen  w-full grid grid-cols-[5rem,1fr] bg-black'>
      <SideBar/>
       <ChatComponents />
    </div>
  )
}

export default ChatPage