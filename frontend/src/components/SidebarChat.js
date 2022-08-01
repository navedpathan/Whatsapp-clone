import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../css/SidebarChat.css'
// import db from '../db/firebase';

const SidebarChat = ({messages}) => {

  const [ seed, setSeed ] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  return (
    <div className='sbChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sbChat_info">
        <h2>Room Name</h2>
        <p>{messages[messages.length - 1]?.message}</p>
        </div>
    </div>
  )
}

export default SidebarChat