// Write your code here
import React from 'react';
import './index.css';

const Message = ({ isLoggedIn }) => {
  const text = isLoggedIn ? 'Welcome User' : 'Please Login';
  return <h1>{text}</h1>;
};

export default Message;