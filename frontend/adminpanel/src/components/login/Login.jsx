import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Vergeet niet om het aangepaste CSS-bestand te importeren

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        name: username,
        password
      });
      localStorage.setItem('token', response.data.access_token);
      window.location.href = '/';  // Redirect naar de homepage
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container-loginpage">
      <div className="login-container">
        <h2>Welkom terug</h2>
        <p className="login-subtitle">Log in</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Voer je naam in"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Voer je wachtwoord in"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="login-button">Inloggen</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
