import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', height: '100vh', background: '#f4f4f4' }}>
      <List>
        <ListItem button component={Link} to="/students">
          <ListItemText primary="Student List" />
        </ListItem>
        <ListItem button component={Link} to="/add-student">
          <ListItemText primary="Add Student" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
