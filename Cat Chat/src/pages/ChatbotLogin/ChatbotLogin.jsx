import React, { useState } from 'react';

const ChatbotLogin = ({ onLogin }) => {
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [input, setInput] = useState('');

  const questions = [
    "Welcome! What's your name?",
    "Great! Now, what's your email address?",
    "Finally, please choose a password.",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setUserResponses({ ...userResponses, [currentQuestion]: input });
      setInput('');
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onLogin(userResponses);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Chatbot Login</h2>
      <div className="space-y-4 mb-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.isUser ? 'bg-blue-100 text-right' : 'bg-gray-100'}`}>
            {msg.text}
          </div>
        ))}
        {currentQuestion < questions.length && (
          <div className="bg-gray-100 p-2 rounded-lg">{questions[currentQuestion]}</div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type={currentQuestion === 2 ? 'password' : 'text'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer here"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotLogin;
