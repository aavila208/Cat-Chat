import React, { useState } from 'react';
import ChatbotLogin from './pages/ChatbotLogin/ChatbotLogin';
import ChatWindow from './components/ChatWindow';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <ChatbotLogin onLogin={setUser} />
      ) : (
        <ChatWindow user={user} />
      )}
    </div>
  );
}

export default App;
