import { Avatar, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react';
import '../css/Chat.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from '../db/axios';
import { useStateValue } from '../redux/StateProvider';

const Chat = ({ messages }) => {

  const [ seed, setSeed ] = useState("");
  const [input, setInput] = useState("");
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timestamp: new Date().toLocaleString(),
      received: true
    });
    setInput("");
  }

  return (
    <div className='chat'>
      <div className="chat_header">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen {' '}
          {messages[messages.length - 1]?.timestamp}</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {messages.map((message) => (
          <p className={`chat_msg ${message.name === user.displayName && 'chat_receiver'}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat