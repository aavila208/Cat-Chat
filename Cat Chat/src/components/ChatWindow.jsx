import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [users] = useState([user, { username: 'Bot' }]); // Simulated user list

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3003/messages', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        const data = await response.json();
        if (response.ok) {
          setMessages(data);
        } else {
          console.error('Error fetching messages:', data.error);
        }
      } catch (error) {
        console.error('An error occurred while fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
        <UserList users={users} />
      </div>
      <div className="w-3/4 flex flex-col">
        <MessageList messages={messages} />
        <MessageInput onSendMessage={addMessage} user={user} />
      </div>
    </div>
  );
};

export default ChatWindow;