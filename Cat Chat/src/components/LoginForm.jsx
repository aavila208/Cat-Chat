import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        // Save the token, e.g., in localStorage
        localStorage.setItem('token', data.token);
        onLogin({ username });
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        // Save the token, e.g., in localStorage
        localStorage.setItem('token', data.token);
        onLogin({ username: data.username });
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-sm mx-auto mt-10">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="w-full px-3 py-2 border rounded-md"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-3 py-2 border rounded-md"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="w-full px-3 py-2 border rounded-md"
      />
      <button type="submit" className="w-full mt-2 px-3 py-2 bg-blue-500 text-white rounded-md">
        Register
      </button>
      <button onClick={handleLogin} className="w-full mt-2 px-3 py-2 bg-green-500 text-white rounded-md">
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;