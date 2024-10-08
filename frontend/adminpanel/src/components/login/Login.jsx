// src/pages/Login.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import css
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      });
      // Verwerk het token (bijv. opslaan in localStorage)
      localStorage.setItem('token', response.data.token);
      navigate('/admin/dashboard'); // Redirect naar het dashboard na inloggen
    } catch (err) {
      setError('Ongeldige gebruikersnaam of wachtwoord');
    }
  };

  return (
    <div>
      <h1>Inloggen</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Gebruikersnaam"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Inloggen</button>
      </form>
    </div>
  );
};

export default Login;
