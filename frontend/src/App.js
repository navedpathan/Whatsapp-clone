import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './db/axios';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data)
      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('491329ef75a600c28d8c', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      console.log(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
