// Write your code here
import React, { Component } from 'react';
import './index.css';
import Message from '../Message';
import Login from '../Login';
import Logout from '../Logout';

class Home extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClick={this.handleLogout} />
          ) : (
            <Login onClick={this.handleLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;