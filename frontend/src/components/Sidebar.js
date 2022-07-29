import React, { useState, useEffect } from 'react';
import '../css/Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import pic from '../images/avtpic.jpg';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    
    return (
        <div className='sidebar'>
            <div className="sb_header">
                <Avatar src={pic}/>
                <span className='username'></span>
                <div className="sb_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sb_search">
                <div className="sb_searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder='Search or start new chat'/>
                </div>
            </div>

            <div className="sb_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;