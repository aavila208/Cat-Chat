import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, user }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        const response = await fetch('http://localhost:3003/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ username: user.username, text: message })
        });

        const data = await response.json();
        if (response.ok) {
          onSendMessage(data);
        } else {
          console.error('Error sending message:', data.error);
        }
      } catch (error) {
        console.error('An error occurred while sending the message:', error);
      }
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="w-full px-3 py-2 border rounded-md"
      />
      <button type="submit" className="mt-2 px-3 py-2 bg-blue-500 text-white rounded-md">
        Send
      </button>
    </form>
  );
};

export default MessageInput;