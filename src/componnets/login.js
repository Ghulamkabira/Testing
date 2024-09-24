import React, { useState } from 'react';
import './login.css';
import { Button } from '@mui/material';
import axios from 'axios';
import userEvent from '@testing-library/user-event';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

     const handleSubmit=async(e)=>{
        e.preventDefault();
        const payload={
            username:username,
            password:password,
        }
        const dataSubmit=await axios.post('/get', payload)
     };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </label>
        </div>
     <Button variant="contained" color="success" type='submit'>Login</Button>
      </form>
        </div>
        );
        };

export default LoginPage;


