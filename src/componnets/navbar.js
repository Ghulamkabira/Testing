import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav >
      <h4>My Website</h4>
      <ul>
        <li>
         <a href='/'>Home</a>
        </li>
        <li>
        <a href='/login'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;