import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message, index) => (
        <div key={index} className="mb-2">
          <strong>{message.username}: </strong>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
