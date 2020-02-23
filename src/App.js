import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import CheckingAccount from './components/checking/checkingAccount.js';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <CheckingAccount />
      </div>
    );
  }
}

export default App;
