import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../css/SidebarChat.css'
// import db from '../db/firebase';

const SidebarChat = ({ addNewChat }) => {

  const [ seed, setSeed ] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  const createChat = () => {
    const roomName = prompt('Please enter name for chat');
    
  };
  
  return !addNewChat ? (
    <div className='sbChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sbChat_info">
        <h2>Room name</h2>
        <p>this is my last msg</p>
        </div>
    </div>
  ) : (
    <div onClick={createChat} className="sbChat">
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat